// The main data object as provided in the previous step.
const values = {
  AE: {
    pr: "Head Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  QA: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  MA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ML: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  GN: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CI: {
    pr: "Regional Branch",
    destination: [
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  GH: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  TG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  BJ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  NG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CM: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ET: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  SO: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  KE: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  UG: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  CD: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  TZ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  MZ: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ZW: {
    pr: "Services",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  ZA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
  SA: {
    pr: "Regional Branch",
    destination: [
      { name: "item 1", link: "#" },
      { name: "item 2", link: "#" },
      { name: "item 3", link: "#" },
    ],
  },
};

// Object to map country ISO codes to their full names.
const countryNames = {
  AE: "United Arab Emirates",
  QA: "Quatar",
  MA: "Morocco",
  ML: "Mali",
  GN: "Guinea",
  CI: "Côte d'Ivoire",
  GH: "Ghana",
  TG: "Togo",
  BJ: "Benin",
  NG: "Nigeria",
  CM: "Cameroon",
  ET: "Ethiopia",
  SO: "Somalia",
  KE: "Kenya",
  UG: "Uganda",
  CD: "Democratic Republic of Congo",
  TZ: "Tanzania",
  MZ: "Mozambique",
  ZW: "Zimbabwe",
  ZA: "South Africa",
  SA: "Kingdom of Saudi Arabia",
};

/**
 * Searches for countries by a fuzzy match of their name or ISO code.
 * @param {string} query The search query (e.g., 'sou', 'ar', 'nig').
 * @returns {Array<object> | string} An array of objects with the country's name, `pr` value, and destinations,
 * or a string message if no countries are found.
 */
function getCountryData(query) {
  // Normalize the query for case-insensitive comparison.
  const normalizedQuery = query.toLowerCase();
  const matches = [];

  // Iterate over each country in the `values` and `countryNames` objects.
  for (const code in values) {
    if (Object.prototype.hasOwnProperty.call(values, code)) {
      const countryName = countryNames[code]
        ? countryNames[code].toLowerCase()
        : "";

      // Check for a fuzzy match in either the country name or the ISO code.
      if (
        countryName.includes(normalizedQuery) ||
        code.toLowerCase().includes(normalizedQuery)
      ) {
        // If a match is found, create an object with the required data and add it to the matches array.
        matches.push({
          countryName: countryName
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "), // Capitalize words for display
          pr: values[code].pr,
          destinations: values[code].destination,
        });
      }
    }
  }

  // Handle the different cases for the number of matches.
  if (matches.length > 0) {
    return matches;
  } else {
    return `No countries found matching the query '${query}'.`;
  }
}

// --- DOM Elements and Event Handling ---
const searchInput = document.getElementById("searchDestination");
const suggestionsContainer = document.getElementById("destinationSuggestions");
const loadingIndicator = document.getElementById("loadingIndicator");

/**
 * A simple debounce function to limit the rate of function calls.
 * @param {Function} func The function to debounce.
 * @param {number} delay The debounce delay in milliseconds.
 * @returns {Function} The debounced function.
 */
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * Handles the input event, performs the search, and renders the results.
 * @param {Event} event The input event object.
 */
const handleSearch = (event) => {
  const query = event.target.value.trim();
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  if (query.length === 0) {
    // Show a prompt if the search bar is empty
    suggestionsContainer.innerHTML =
      '<p class="initial-text">Start typing to see suggestions.</p>';
    return;
  }

  loadingIndicator.classList.remove("hidden");

  // Call the search function
  const results = getCountryData(query);

  loadingIndicator.classList.add("hidden");

  if (typeof results === "string") {
    // No results found
    suggestionsContainer.innerHTML = `<p class="not-found">${results}</p>`;
  } else {
    // Render the results
    results.forEach((country) => {
      const countryUl = document.createElement("ul");
      countryUl.classList.add("country-list");

      const countryTitle = document.createElement("h3");
      countryTitle.classList.add("country-title");
      countryTitle.textContent = country.countryName;
      countryUl.appendChild(countryTitle);

      // Add destinations as list items
      country.destinations.forEach((destination) => {
        const destinationLi = document.createElement("li");
        destinationLi.classList.add("destination-item");

        const destinationLink = document.createElement("a");
        destinationLink.href = destination.link;
        destinationLink.target = "_blank";
        destinationLink.textContent = destination.name;
        destinationLink.classList.add("destination-link");

        destinationLi.appendChild(destinationLink);
        countryUl.appendChild(destinationLi);
      });

      suggestionsContainer.appendChild(countryUl);
    });
  }
};

// Attach the debounced event listener to the input element
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener("input", debouncedSearch);
