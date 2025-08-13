// --- DOM Elements and Event Handling ---
const categorySelect = document.getElementById("category-select");
const categorySuggestions = document.getElementById("categorySuggestions");
const categoryLoading = document.getElementById("loadingIndicatorCategory");

// Your existing data and helper functions remain the same
const destinationsByCategory = {
  urban: [
    { name: "Item 1", link: "www.google.com" },
    { name: "Item 1", link: "#" },
    { name: "item 2", link: "#" },
  ],
  luxury: [
    { name: "Item 1", link: "www.google.com" },
    { name: "Item 2", link: "#" },
    { name: "item 1", link: "#" },
    { name: "item 1", link: "#" },
    { name: "Item 1", link: "#" },
    { name: "Item", link: "#" },
  ],
};

/**
 * Handles the change event on the select element, and renders the results.
 */
const handleCategoryChange = (event) => {
  const query = event.target.value.trim();
  categorySuggestions.innerHTML = "";

  if (query.length === 0) {
    categorySuggestions.innerHTML =
      '<p class="initial-text">Select a category to see suggestions.</p>';
    return;
  }

  // categoryLoading.classList.remove("hidden"); // Optional: Add a loading state

  // Directly use the selected category from the event target
  const selectedCategoryDestinations = destinationsByCategory[query];

  // categoryLoading.classList.add("hidden"); // Optional: Hide the loading state

  if (!selectedCategoryDestinations) {
    categorySuggestions.innerHTML = `<p class="not-found">No destinations found for category '${query}'.</p>`;
  } else {
    // Render the suggestions
    const ul = document.createElement("ul");
    ul.classList.add("category-list");
    const categoryListItem = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.classList.add("category-title");
    h3.textContent = query
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("width", "12");
    svgElement.setAttribute("height", "12");
    svgElement.innerHTML = `<use href="#myCustomSymbol"></use>`;

    const subList = document.createElement("ul");
    subList.classList.add("destination-list");
    selectedCategoryDestinations.forEach((dest) => {
      const li = document.createElement("li");
      li.classList.add("destination-item");

      const a = document.createElement("a");
      a.href = dest.link;
      a.target = "_blank";
      a.classList.add("destination-link");
      a.textContent = dest.name;

      li.appendChild(a);
      subList.appendChild(li);
    });
    categoryListItem.appendChild(h3);
    categoryListItem.appendChild(svgElement);
    categoryListItem.appendChild(subList);
    ul.appendChild(categoryListItem);
    categorySuggestions.appendChild(ul);
  }
};

/**
 * Populates the select element with categories.
 */
const populateCategorySelect = () => {
  const categories = Object.keys(destinationsByCategory);

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a category...";
  categorySelect.appendChild(defaultOption);

  categories.forEach((categoryName) => {
    const option = document.createElement("option");
    option.value = categoryName;
    option.textContent = categoryName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    categorySelect.appendChild(option);
  });
};

// Check if the select element exists before adding listeners
if (categorySelect) {
  populateCategorySelect();
  categorySelect.addEventListener("change", handleCategoryChange);
}
