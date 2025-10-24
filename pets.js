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

// Function to render pets
function renderPets() {
    let htmlString = "";

    state.pets.forEach(pet => {
        const petHTML = pet.html();
        console.log("Individual pet HTML:", petHTML);
        htmlString += petHTML;
    });

    document.getElementById("petsContainer").innerHTML = htmlString;

    // Proof of life
    console.log("Aggregated HTML:", htmlString);
    return htmlString;
}

renderPets();

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

 
    savePets(); 
    renderPets();

    // Proof of life
    console.table(state.pets); 

});