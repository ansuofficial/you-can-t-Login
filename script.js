let password = document.getElementById('password');
let show = document.getElementById('show');

show.addEventListener('click', function(e) {
    e.preventDefault();
    if (password.type === "password") {
        document.getElementById('password').type = "text";
        document.getElementById('show').textContent = "Hide"
    } else {
        document.getElementById('password').type = "password";
        document.getElementById('show').textContent = "Show"
    }
})


// Get a reference to the button container element
let buttonContainer = document.getElementById('moveContainer');

// Add a "mouseover" event listener
buttonContainer.addEventListener('mouseover', function() {
    // Calculate random X and Y coordinates within a specified range
    let randomX = getRandomInt(-200, 150); // Adjust the range as needed
    let randomY = getRandomInt(-200, 150); // Adjust the range as needed
    
    // Apply the random coordinates to move the button container
    buttonContainer.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Function to generate a random integer within a specified range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

