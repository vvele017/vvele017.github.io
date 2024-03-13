// Smooth Animation Example

// Get the element you want to animate
const elementToAnimate = document.getElementById('elementToAnimate');

// Add a click event listener to trigger the animation
elementToAnimate.addEventListener('click', () => {
    // Add a class to start the animation
    elementToAnimate.classList.add('smooth-animation');
    
    // Remove the class after the animation ends (adjust the timeout value to match your CSS transition duration)
    setTimeout(() => {
        elementToAnimate.classList.remove('smooth-animation');
    }, 1000); // Adjust timeout as needed
});
