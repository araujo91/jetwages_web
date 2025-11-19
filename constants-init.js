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

/////////////////Drop down menu//////////////////////////

// 1) Define airline groups by support level (from constants.js)
const airlineGroups = JW_CONSTANTS.airlineGroups;

// 1.1) Per-country overrides (also from constants.js)
const airlineCountrySupport = JW_CONSTANTS.airlineCountrySupport;

// 2) Messages per group
const statusMessages = {
  fully:  "✅ Fully works",
  partial:"🟡 Partially works",
  none:   "🔴 Not available yet"
};

// 2.1) Google Form field ID – your “Airline name” entry ID
const GOOGLE_FORM_AIRLINE_FIELD = "entry.1827504543";

// 2.2) Helper: update the request link with a prefilled airline name
function updateRequestLink(airlineName) {
  const link = document.getElementById("airlineRequestLink");
  if (!link || !airlineName) return;

  let baseHref = link.getAttribute("data-base-href");
  if (!baseHref) {
    baseHref = link.href.split("?")[0]; // remove any tracking params e.g. ?usp=header
    link.setAttribute("data-base-href", baseHref);
  }

  const encoded = encodeURIComponent(airlineName);
  link.href = `${baseHref}?${GOOGLE_FORM_AIRLINE_FIELD}=${encoded}`;
}

// 3) Helper — match by name OR ICAO code
function airlineMatches(entry, query) {
  const q = query.toLowerCase();
  if (entry.name && entry.name.toLowerCase() === q) return true;
  if (entry.codes?.some(code => code.toLowerCase() === q)) return true;
  return false;
}

// 4) Helper — return status key (fully / partial / none / null)
function getStatusKey(airlineName, countryCode) {
  if (!airlineName) return null;
  const name = airlineName.trim();

  // 1) Per-country override, if it exists
  const perCountry = airlineCountrySupport[name];
  if (perCountry && countryCode) {
    const statusForCountry = perCountry[countryCode];
    if (statusForCountry) return statusForCountry;
  }

  // 2) Fallback to base airlineGroups
  for (const [statusKey, list] of Object.entries(airlineGroups)) {
    if (list.some(entry => airlineMatches(entry, name))) {
      return statusKey;
    }
  }

  // 3) Unknown airline
  return null;
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const input     = document.getElementById("airlineSelect");
  const countryEl = document.getElementById("airlineCountry");
  const result    = document.getElementById("airlineResult");
  const reqLine   = document.getElementById("airlineRequest");
  const nameSpan  = document.getElementById("airlineNamePlaceholder");
  const checkBtn  = document.getElementById("airlineCheckBtn");

  if (!input || !result || !checkBtn) return;

  function recomputeAirlineStatus() {
    const airline = input.value.trim();
    const country = countryEl ? countryEl.value : "";

    if (!airline) {
      result.textContent = "";
      reqLine.style.display = "none";
      return;
    }

    const statusKey = getStatusKey(airline, country);

    if (statusKey) {
      // Known airline
      result.textContent = statusMessages[statusKey];
      result.style.color = "var(--text)";

      if (statusKey === "none") {
        // Unsupported → show nudge
        nameSpan.textContent = airline;
        updateRequestLink(airline);
        reqLine.style.display = "block";
      } else {
        // fully or partial
        reqLine.style.display = "none";
      }

    } else {
      // Unknown airline
      result.textContent = "❓ Unknown airline or code — support not available yet";
      result.style.color = "var(--muted)";
      nameSpan.textContent = airline;
      updateRequestLink(airline);
      reqLine.style.display = "block";
    }
  }

    // ✅ Main trigger: explicit button click (works everywhere)
      checkBtn.addEventListener("click", recomputeAirlineStatus);

      // Optional niceties:
      // Recompute if country changes or user presses Enter in the box
      if (countryEl) {
        countryEl.addEventListener("change", recomputeAirlineStatus);
      }
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          recomputeAirlineStatus();
        }
      });


  // Autogenerate datalist from constants.js
  (function buildAirlineDataList() {
    const datalist = document.getElementById("airlines");
    if (!datalist) return;

    const airlines = [
      ...airlineGroups.fully,
      ...airlineGroups.partial,
      ...airlineGroups.none
    ];

    airlines.forEach(a => {
      const option = document.createElement("option");
      option.value = a.name;
      if (a.codes?.[0]) option.textContent = `${a.name} (${a.codes[0]})`;
      datalist.appendChild(option);
    });
  })();
});

///////////////////////End of dropdown menu///////////////////////////////////
