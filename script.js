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

// Capture each input
const ownerName = document.getElementById("ownerName").value;
console.log("Name:", ownerName);

const email = document.getElementById("email").value;
console.log("Email:", email);

const phone = document.getElementById("phone").value;
console.log("Phone:", phone);

const city = document.getElementById("city").value;
console.log("City:", city);

const zip = document.getElementById("zip").value;
console.log("Zip:", zip);

const petName = document.getElementById("petName").value;
console.log("Pet Name:", petName);

// Save data into global state object
state = {
    ownerName,
    email,
    phone,
    city,
    zip,
    petName,
};

// Proof of life: final state to console
console.log("Final state object:");
console.table(state);

// Factory function for pet owner
const petOwner = createPetOwner(state);
petOwner.status();
}

function createPetOwner({ ownerName, email, phone, city, zip, petName }) {
    return {
        ownerName,
        email,
        phone,
        city,
        zip,
        petName,
        status() {
            console.log(
                `Owner ${this.ownerName} from ${this.city} has a pet named ${this.petName}.`
            );
        },
    };
}