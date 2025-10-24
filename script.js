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
const ownerName = document.getElementById("ownerName").value.trim();
console.log("Name:", ownerName);

const email = document.getElementById("email").value.trim();
console.log("Email:", email);

const phone = document.getElementById("phone").value.trim();
console.log("Phone:", phone);

const city = document.getElementById("city").value.trim();
console.log("City:", city);

const zip = document.getElementById("zip").value.trim();
console.log("Zip:", zip);

const petName = document.getElementById("petName").value.trim();
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
petOwner.render();
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

        render() {
            document.getElementById("displayOwnerName").textContent = this.ownerName;

            document.getElementById("displayEmail").textContent = this.email;

            document.getElementById("displayPhone").textContent = this.phone;

            document.getElementById("displayCity").textContent = this.city;

            document.getElementById("displayZip").textContent = this.zip;
            
            document.getElementById("displayPetName").textContent = this.petName;

            // Show The Display Card
            document.getElementById("displayCard").classList.remove("d-none");
        }
    };
}