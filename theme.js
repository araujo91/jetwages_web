/**
 * JetWages theme: prefers-color-scheme + optional data-theme override.
 * Persist choice in localStorage under "jw-theme" ("light" | "dark" | cleared for system).
 */
(function () {
  var STORAGE_KEY = "jw-theme";

  function safeGet() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  }

  function safeSet(value) {
    try {
      if (value) localStorage.setItem(STORAGE_KEY, value);
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentOverride() {
    var attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return null;
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function effectiveTheme() {
    return currentOverride() || (systemPrefersDark() ? "dark" : "light");
  }

  function cycleTheme() {
    // light → dark → system (no attr) → light …
    var override = currentOverride();
    var next;
    if (!override) {
      next = systemPrefersDark() ? "light" : "dark";
    } else if (override === "light") {
      next = "dark";
    } else {
      next = null; // back to system
    }
    applyTheme(next);
    safeSet(next);
    syncToggles();
  }

  function labelFor() {
    var override = currentOverride();
    if (!override) return "Theme: system (click to set light)";
    if (override === "light") return "Theme: light (click for dark)";
    return "Theme: dark (click for system)";
  }

  function textFor() {
    var override = currentOverride();
    if (!override) return "Auto";
    if (override === "light") return "Light";
    return "Dark";
  }

  function syncToggles() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-label", labelFor());
      btn.setAttribute("title", labelFor());
      var label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = textFor();
    });
  }

  // Apply stored preference ASAP (also safe if script is in <head>)
  applyTheme(safeGet());

  function bind() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      if (btn.dataset.themeBound) return;
      btn.dataset.themeBound = "1";
      btn.addEventListener("click", cycleTheme);
    });
    syncToggles();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncToggles);
  }
})();
