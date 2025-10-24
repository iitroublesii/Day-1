// Proof of Life
console.log("pets.js");

// Global state object
const state = {
    pets: [],
};

const testPet = createPet("Benji", 8, "Cat");


testPet.status();

// Button & add event listener
const addPetButton = document.getElementById("addPet");

addPetButton.addEventListener("click", () => {
    console.log("Add Pet button clicked!");

    const name = document.getElementById("petName").value.trim();
    const age = parseInt(document.getElementById("petAge").value.trim());
    const species = document.getElementById("petSpecies").value.trim();

    console.log("Form Inputs:", name, age, species);

    // Create a new pet
    const newPet = createPet(name, age, species);

    // Add to global state array
    state.pets.push(newPet);

    // Proof of life:
    newPet.status();
    console.table(state.pets);
});