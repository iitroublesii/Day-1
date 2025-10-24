// state.js
console.log("Hello from state.js");

// Global state object
const state = {
    
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    zipcode: localStorage.getItem("zipcode") || "",

    pets: []
};

// Convert a pet object into plain info for storage
function serializePet(pet) {
    return {
        name: pet.name,
        age: pet.age,
        species: pet.species,
        energy: pet.energy,
        happiness: pet.happiness
    };
}

// Save pets to local storage
function savePets() {
    const serializedPets = state.pets.map(serializePet);
    localStorage.setItem("pets", JSON.stringify(serializedPets));
}

// Load pets from local storage
function loadPets() {
    const petString = localStorage.getItem("pets");
    const savedPets = JSON.parse(petString) || [];
    state.pets = [];

    savedPets.forEach(petData => {
        state.pets.push(createPet(petData.name, petData.age, petData.species));
    });
}

// Load pets 
loadPets();

// Proof of life
console.log("Loaded state:", state);