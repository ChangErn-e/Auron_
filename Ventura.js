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

    // Change the image source based on the color using data attributes
    if (color === 'black') {
        productImage.src = productImage.dataset.srcBlack;
    } else if (color === 'white') {
        productImage.src = productImage.dataset.srcWhite;
    } 
}