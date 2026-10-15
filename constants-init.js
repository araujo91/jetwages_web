// Populate elements with `data-const` attributes using JETWAGES_CONSTANTS.
// Usage in HTML: <a data-const="email">contact</a>
(function () {
  function applyConstants() {
    if (!window.JETWAGES_CONSTANTS) return;
    var els = document.querySelectorAll('[data-const]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-const');
      var value = window.JETWAGES_CONSTANTS[key];
      if (!value) return;

      // If element is a link, set href appropriately for email or url
      if (el.tagName.toLowerCase() === 'a') {
        if (key === 'email') {
          el.setAttribute('href', 'mailto:' + value);
          if (!el.textContent.trim()) el.textContent = value;
        } else if (key === 'website') {
          // allow pages to set data-path="privacy-policy.html" to create full URL
          var path = el.getAttribute('data-path') || '';
          // normalize to ensure exactly one slash between base and path
          var base = String(value || '');
          // remove trailing slash from base
          if (base.endsWith('/')) base = base.slice(0, -1);
          // remove leading slash from path
          if (path.startsWith('/')) path = path.slice(1);
          var href = path ? (base + '/' + path) : base + '/';
          el.setAttribute('href', href);
          if (!el.textContent.trim()) el.textContent = href;
        } else {
          el.setAttribute('href', value);
          if (!el.textContent.trim()) el.textContent = value;
        }
      } else {
        // for other elements, inject the value as text
        el.textContent = value;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConstants);
  } else {
    applyConstants();
  }
})();

///////////////// Airline checker //////////////////////////

const airlineGroups = window.JW_CONSTANTS?.airlineGroups || { fully: [], partial: [], none: [] };
const airlineCountrySupport = window.JW_CONSTANTS?.airlineCountrySupport || {};

const GOOGLE_FORM_AIRLINE_FIELD = "entry.1827504543";

const COUNTRY_LABELS = {
  UK: "United Kingdom",
  EU: "European Union (non-UK)",
  CH: "Switzerland",
  OTHER: "Other"
};

const PLACE_PHRASES = {
  UK: "the UK",
  EU: "the EU",
  CH: "Switzerland",
  OTHER: "other bases"
};

const COUNTRY_ORDER = ["UK", "EU", "CH", "OTHER"];

function updateRequestLink(airlineName) {
  const link = document.getElementById("airlineRequestLink");
  if (!link || !airlineName) return;

  let baseHref = link.getAttribute("data-base-href");
  if (!baseHref) {
    baseHref = link.href.split("?")[0];
    link.setAttribute("data-base-href", baseHref);
  }

  link.href = baseHref + "?" + GOOGLE_FORM_AIRLINE_FIELD + "=" + encodeURIComponent(airlineName);
}

function airlineMatches(entry, query) {
  const q = query.toLowerCase();
  if (entry.name && entry.name.toLowerCase() === q) return true;
  if (entry.codes && entry.codes.some(function (code) { return code.toLowerCase() === q; })) return true;
  return false;
}

function findAirline(query) {
  const name = String(query || "").trim();
  if (!name) return null;
  const groups = ["fully", "partial", "none"];
  for (let i = 0; i < groups.length; i++) {
    const statusKey = groups[i];
    const list = airlineGroups[statusKey] || [];
    for (let j = 0; j < list.length; j++) {
      if (airlineMatches(list[j], name)) {
        return { statusKey: statusKey, entry: list[j], query: name };
      }
    }
  }
  return { statusKey: null, entry: null, query: name };
}

function normalizeStatus(value) {
  if (typeof value === "string") return { status: value, note: "" };
  if (value && typeof value.status === "string") {
    return { status: value.status, note: typeof value.note === "string" ? value.note : "" };
  }
  return null;
}

function countryKeys(support) {
  return Object.keys(support).sort(function (a, b) {
    const ia = COUNTRY_ORDER.indexOf(a);
    const ib = COUNTRY_ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}

function supportFor(airline) {
  if (!airline || !airline.entry) return null;
  return airlineCountrySupport[airline.entry.name] || null;
}

function statusFor(airline, countryCode) {
  if (!airline || !airline.entry) return { status: null, note: "" };
  const support = supportFor(airline);
  if (support) {
    if (!countryCode) return { status: "need-country", note: "" };
    const parsed = normalizeStatus(support[countryCode]);
    if (parsed) return parsed;
    return { status: "none", note: "" };
  }
  return {
    status: airline.statusKey,
    note: typeof airline.entry.note === "string" ? airline.entry.note : ""
  };
}

function messageFor(displayName, status, note, countryCode) {
  if (status === "need-country") return "Choose where you are based.";
  if (status === "partial") {
    if (note) return note;
    const place = PLACE_PHRASES[countryCode];
    return place
      ? displayName + " in " + place + " is only partly supported."
      : displayName + " is only partly supported.";
  }
  if (status === "fully") {
    const place = PLACE_PHRASES[countryCode];
    return place
      ? displayName + " in " + place + " is supported."
      : displayName + " is supported.";
  }
  return "Not available yet.";
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("airlineSelect");
  const countryWrap = document.getElementById("airlineCountryWrap");
  const countryEl = document.getElementById("airlineCountry");
  const result = document.getElementById("airlineResult");
  const reqLine = document.getElementById("airlineRequest");
  const nameSpan = document.getElementById("airlineNamePlaceholder");
  const form = document.getElementById("airlineCheckerForm");

  if (!input || !result || !form) return;

  function hideRequest() {
    if (reqLine) reqLine.hidden = true;
  }

  function showRequest(airlineName) {
    if (!reqLine || !nameSpan) return;
    nameSpan.textContent = airlineName;
    updateRequestLink(airlineName);
    reqLine.hidden = false;
  }

  function syncCountryField(airline) {
    if (!countryWrap || !countryEl) return false;
    const support = supportFor(airline);
    if (!support) {
      countryWrap.hidden = true;
      countryEl.value = "";
      countryEl.dataset.keys = "";
      return false;
    }

    const keys = countryKeys(support);
    const keyList = keys.join(",");
    if (countryEl.dataset.keys !== keyList) {
      const previous = countryEl.value;
      countryEl.replaceChildren();
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Select a base";
      countryEl.appendChild(placeholder);
      keys.forEach(function (key) {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = COUNTRY_LABELS[key] || key;
        countryEl.appendChild(option);
      });
      countryEl.value = keys.indexOf(previous) !== -1 ? previous : "";
      countryEl.dataset.keys = keyList;
    }

    countryWrap.hidden = false;
    return true;
  }

  function clearResult() {
    result.textContent = "";
    result.removeAttribute("data-status");
    hideRequest();
  }

  function recomputeAirlineStatus() {
    const airline = findAirline(input.value);
    syncCountryField(airline);

    if (!airline) {
      clearResult();
      return;
    }

    const country = countryEl ? countryEl.value : "";
    const outcome = statusFor(airline, country);
    const displayName = airline.entry ? airline.entry.name : airline.query;

    result.textContent = messageFor(displayName, outcome.status, outcome.note, country);
    if (outcome.status === "fully" || outcome.status === "partial" || outcome.status === "none" || outcome.status == null) {
      result.setAttribute("data-status", outcome.status || "none");
    } else {
      result.removeAttribute("data-status");
    }

    if (outcome.status === "none" || outcome.status == null) {
      showRequest(displayName);
    } else {
      hideRequest();
    }
  }

  input.addEventListener("input", function () {
    syncCountryField(findAirline(input.value));
    clearResult();
  });

  if (countryEl) {
    countryEl.addEventListener("change", function () {
      if (input.value.trim()) recomputeAirlineStatus();
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    recomputeAirlineStatus();
  });

  syncCountryField(findAirline(input.value));

  const datalist = document.getElementById("airlineList");
  if (datalist) {
    const airlines = []
      .concat(airlineGroups.fully || [])
      .concat(airlineGroups.partial || [])
      .concat(airlineGroups.none || []);
    airlines.forEach(function (airline) {
      const option = document.createElement("option");
      option.value = airline.name;
      if (airline.codes && airline.codes[0]) option.label = airline.name + " (" + airline.codes[0] + ")";
      datalist.appendChild(option);
    });
  }
});

/////////////////////// End of airline checker //////////////////////////
