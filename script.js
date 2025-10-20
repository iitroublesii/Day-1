// Proof of life to show it is connected
console.log("hello world");

// Global state object to hold form data
let state = {};

// Proof of life checks that state exists and nothing is there
console.log("Initial state:");
console.table(state);

// Uses the button element
const saveButton = document.getElementById("saveButton");

// Ads Event listener to the button
saveButton.addEventListener("click", saveForm);

// Runs when the button is clicked
function saveForm() {
    // Proof of life: Button is working right
    console.log("button clicked!");
}