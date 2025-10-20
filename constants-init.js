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
