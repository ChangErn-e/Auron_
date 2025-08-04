// UTL-Specs.js
function changeColor(color) {
    const productImage = document.getElementById('productImage');
    const colorCircles = document.querySelectorAll('.color-circle');

    // Remove 'selected' class from all color circles
    colorCircles.forEach(circle => {
        circle.classList.remove('selected');
    });

    // Add 'selected' class to the clicked color circle
    const selectedCircle = document.querySelector(`.color-circle.${color}`);
    if (selectedCircle) {
        selectedCircle.classList.add('selected');
    }

    // Change the product image based on the selected color
    const newImageSrc = productImage.getAttribute(`data-src-${color}`);
    if (newImageSrc) {
        productImage.src = newImageSrc;
    }
}