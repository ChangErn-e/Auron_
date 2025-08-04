// search.js

document.addEventListener('DOMContentLoaded', () => {
    // Get the search input field and the container for all product cards
    const searchInput = document.getElementById('searchInput');
    const productContainer = document.getElementById('product-card-container');

    // If these elements don't exist, we can't proceed
    if (!searchInput || !productContainer) {
        console.warn("Search input or product container not found. Search functionality will not be active.");
        return;
    }

    // Get all individual product cards
    const productCards = productContainer.querySelectorAll('.product-card');

    /**
     * Filters the product cards based on the search query.
     * It checks if the product name or description includes the search term.
     * @param {string} query The text to search for.
     */
    const filterProducts = (query) => {
        const searchQuery = query.toLowerCase().trim();

        // Loop through each product card
        productCards.forEach(card => {
            // Get the product name and description from the card
            const productName = card.querySelector('h2').textContent.toLowerCase();
            const productDescription = card.querySelector('p').textContent.toLowerCase();

            // Check if the search query is in the product name or description
            if (productName.includes(searchQuery) || productDescription.includes(searchQuery)) {
                // Show the card by setting its display property back to 'flex'
                card.style.display = 'flex';
            } else {
                // Hide the card if it doesn't match
                card.style.display = 'none';
            }
        });
    };

    // Add an event listener to the search input for a "live search" effect.
    searchInput.addEventListener('keyup', (event) => {
        filterProducts(event.target.value);
    });

    // Add a click listener to the search button to also trigger the search.
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            filterProducts(searchInput.value);
        });
    }
});