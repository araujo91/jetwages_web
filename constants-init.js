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

// 1) Define airline groups by support level
const airlineGroups = JW_CONSTANTS.airlineGroups;


// 2) Messages per group
const statusMessages = {
  fully:  "✅ Fully works",
  partial:"🟡 Partially works",
  none:   "🔴 Not available yet"
};

// 2.1) Google Form field ID – CHANGE THIS to your “Airline name” entry ID
// e.g. "entry.123456789012345678"
const GOOGLE_FORM_AIRLINE_FIELD = "entry.1827504543";

// 2.2) Helper: update the request link with a prefilled airline name
function updateRequestLink(airlineName) {
  const link = document.getElementById("airlineRequestLink");
  if (!link || !airlineName) return;

  // Get base href (from constants.js via data-const)
  // Cache it so we don't keep chopping query strings
  let baseHref = link.getAttribute("data-base-href");
  if (!baseHref) {
    baseHref = link.href.split("?")[0]; // strip any existing query params
    link.setAttribute("data-base-href", baseHref);
  }

  const encoded = encodeURIComponent(airlineName);
  link.href = `${baseHref}?${GOOGLE_FORM_AIRLINE_FIELD}=${encoded}`;
}

// 3) Helper — match by name or ICAO code
function airlineMatches(entry, query) {
  const q = query.toLowerCase();
  if (entry.name && entry.name.toLowerCase() === q) return true;
  if (Array.isArray(entry.codes)) {
    return entry.codes.some(code => code.toLowerCase() === q);
  }
  return false;
}

// 4) Helper — return status *key* (not message)
function getStatusKey(query) {
  if (!query) return null;
  for (const [statusKey, list] of Object.entries(airlineGroups)) {
    if (list.some(entry => airlineMatches(entry, query))) {
      return statusKey; // "fully", "partial", "none"
    }
  }
  return null; // unknown
}

// DOM elements
const input     = document.getElementById("airlineSelect");
const result    = document.getElementById("airlineResult");
const reqLine   = document.getElementById("airlineRequest");
const nameSpan  = document.getElementById("airlineNamePlaceholder");

// Main input logic
input.addEventListener("input", () => {
  const value = input.value.trim();

  if (!value) {
    result.textContent = "";
    if (reqLine) reqLine.style.display = "none";
    return;
  }

  const statusKey = getStatusKey(value);

  if (statusKey) {
    // Known airline
    result.textContent = statusMessages[statusKey];
    result.style.color = "var(--text)";

    if (statusKey === "none") {
      // Unsupported → show request support link
      if (nameSpan && reqLine) {
        nameSpan.textContent = value;
        updateRequestLink(value);
        reqLine.style.display = "block";
      }
    } else {
      // Fully or partial → hide request support link
      if (reqLine) reqLine.style.display = "none";
    }

  } else {
    // Completely unknown airline
    result.textContent = "❓ Unknown airline or code — support not available yet";
    result.style.color = "var(--muted)";
    if (nameSpan && reqLine) {
      nameSpan.textContent = value;
      updateRequestLink(value);
      reqLine.style.display = "block";
    }
  }
});


// Build datalist options dynamically from airlineGroups
(function buildAirlineDataList() {
  const datalist = document.getElementById("airlines");
  if (!datalist) return;

  const groups = JW_CONSTANTS.airlineGroups;

  // Flatten fully + partial + none groups into a single array
  const airlines = [
    ...groups.fully,
    ...groups.partial,
    ...groups.none
  ];

  airlines.forEach(a => {
    const option = document.createElement("option");
    option.value = a.name;
    if (a.codes?.[0]) {
      option.textContent = `${a.name} (${a.codes[0]})`;
    }
    datalist.appendChild(option);
  });
})();


///////////////////////End of dropdown menu///////////////////////////////////

