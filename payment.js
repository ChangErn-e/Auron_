// Get the close button element
const closeButton = document.querySelector('.close-btn');

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
    // This command tells the browser to go back one page in its history
    window.history.back();
});