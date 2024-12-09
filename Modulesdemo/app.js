// app.js
import { WelcomeMessage } from './welcomeMessage.js'; // Import the class
//import { welcomeconcat } from './welcomeconcat.js';

// Function to handle the button click and display the welcome message
function showWelcome() {
    const name = document.getElementById('nameInput').value; // Get the name from the input field
    const welcome = new WelcomeMessage(name); // Create an instance of the WelcomeMessage class
    const message = welcome.generateMessage(); // Generate the welcome message
    document.getElementById('welcomeMessage').innerText = message; // Display the message in the <p> tag
}

// Automatically attach the event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('submitBtn');
    button.addEventListener('click', showWelcome); // Attach the event listener to the button
});
