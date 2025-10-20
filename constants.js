// Centralized link and contact constants for the site
// Update values here and all pages will use the new values at runtime.
const JETWAGES_CONSTANTS = {
  email: 'data@jetwagess.com',
  website: 'https://www.jetwages.com/',
  unsubscribe: 'https://forms.gle/hCsRM63qbmw8vkt77',
  subscribe: 'https://forms.gle/ZkhTi6NesawTjP6Z8',
  feedback: 'https://forms.gle/E4qjpJhyLT2PMPe8A'
};

// Expose for other scripts
if (typeof window !== 'undefined') {
  window.JETWAGES_CONSTANTS = JETWAGES_CONSTANTS;
}
