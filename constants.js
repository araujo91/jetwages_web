// Centralized link and contact constants for the site
// Update values here and all pages will use the new values at runtime.
const JETWAGES_CONSTANTS = {
  email: 'data@jetwagess.com',
  website: 'https://www.jetwages.com/',
  unsubscribe: 'https://forms.gle/hCsRM63qbmw8vkt77',
  subscribe: 'https://forms.gle/ZkhTi6NesawTjP6Z8',
  feedback: 'https://forms.gle/E4qjpJhyLT2PMPe8A',
  airlineRequest: 'https://docs.google.com/forms/d/e/1FAIpQLScAcWgA_KKvXH2CI-DEN1z3xmbIHQARZOvBSw2sKX16zf7-PQ/viewform', 
};

// Expose for other scripts
if (typeof window !== 'undefined') {
  window.JETWAGES_CONSTANTS = JETWAGES_CONSTANTS;
}


// List of airlines that users can request support fo

const JW_CONSTANTS = {


  airlineGroups: {
    fully: [
    
    ],
    partial: [
      { name: "easyJet", codes: ["EZY"] }
    ],
    none: [
      { name: "Air Canada", codes: ["ACA"] },
      { name: "Air China", codes: ["CCA"] },
      { name: "Air France", codes: ["AFR"] },
      { name: "Air India", codes: ["AIC"] },
      { name: "Air New Zealand", codes: ["ANZ"] },
      { name: "Alaska Airlines", codes: ["ASA"] },
      { name: "All Nippon Airways", codes: ["ANA"] },
      { name: "American Airlines", codes: ["AAL"] },
      { name: "Aurigny Air Services", codes: ["AUR"] },
      { name: "Austrian Airlines", codes: ["AUA"] },
      { name: "Blue Islands", codes: ["BCI"] },
      { name: "British Airways", codes: ["BAW"] },
      { name: "Cathay Pacific", codes: ["CPA"] },
      { name: "China Airlines", codes: ["CAL"] },
      { name: "China Eastern", codes: ["CES"] },
      { name: "China Southern", codes: ["CSN"] },
      { name: "Delta Air Lines", codes: ["DAL"] },
      { name: "Eastern Airways", codes: ["EZE"] },
      { name: "Emirates", codes: ["UAE"] },
      { name: "Etihad Airways", codes: ["ETD"] },
      { name: "Finnair", codes: ["FIN"] },
      { name: "Hainan Airlines", codes: ["CHH"] },
      { name: "Iberia", codes: ["IBE"] },
      { name: "Isles of Scilly Skybus", codes: ["IOS"] },
      { name: "Japan Airlines", codes: ["JAL"] },
      { name: "Jet2", codes: ["EXS"] },
      { name: "KLM", codes: ["KLM"] },
      { name: "Korean Air", codes: ["KAL"] },
      { name: "Loganair", codes: ["LOG"] },
      { name: "Lufthansa", codes: ["DLH"] },
      { name: "Norwegian", codes: ["NAX"] },
      { name: "Qantas", codes: ["QFA"] },
      { name: "Qatar Airways", codes: ["QTR"] },
      { name: "Ryanair", codes: ["RYR"] },
      { name: "Ryanair UK", codes: ["RUK"] },
      { name: "SAS", codes: ["SAS"] },
      { name: "Singapore Airlines", codes: ["SIA"] },
      { name: "Southwest Airlines", codes: ["SWA"] },
      { name: "Swiss", codes: ["SWR"] },
      { name: "TUI Airways", codes: ["TOM"] },
      { name: "Turkish Airlines", codes: ["THY"] },
      { name: "United Airlines", codes: ["UAL"] },
      { name: "Virgin Atlantic", codes: ["VIR"] },
      { name: "Vueling", codes: ["VLG"] },
      { name: "Wizz Air", codes: ["WZZ"] }

    ]
  },
  airlineCountrySupport : {
      "easyJet": {
    UK:   "fully",
    EU:   "partial",
    CH:   "none",
    OTHER:"none"
    }
  }
};

// Expose for other scripts
if (typeof window !== 'undefined') {
  window.JW_CONSTANTS = JW_CONSTANTS;
}


