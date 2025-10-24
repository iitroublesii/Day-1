// Proof of life
console.log("petOwnerFactory.js");

// Factory function petOwner object
function createPetOwner({ ownerName, email, phone, city, zip, petName }) {
    console.log("Creating Pet Owner object...");

    return {
        ownerName,
        email,
        phone,
        city,
        zip,
        petName,

        // Logs the pet owner's data
        status() {
            console.log("Pet Owner Status:");
            console.table(this);
        },

        // Renders the pet owner's data to the webpage
        render() {
            console.log("Rendering pet owner info...");

            // Update the display elements with data
            document.getElementById("displayOwnerName").textContent = this.ownerName;
            document.getElementById("displayEmail").textContent = this.email;
            document.getElementById("displayPhone").textContent = this.phone;
            document.getElementById("displayCity").textContent = this.city;
            document.getElementById("displayZip").textContent = this.zip;
            document.getElementById("displayPetName").textContent = this.petName;

            // Show the display card 
            document.getElementById("displayCard").classList.remove("d-none");            
        },
    };
}