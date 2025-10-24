// Proof of Life
console.log("petCreator.js");

// Factory Function: createPet
function createPet(name, age, species) {
    console.log("Create a pet:", name);

    return {
        name,
        age,
        species,
        energy: 50,
        happiness: 50,

        // Current status
        status() {
            console.log(
                `${this.name} the ${this.species} is ${this.age} years old. 🐾`
            );
            console.log(`Energy: ${this.energy}, Happiness: ${this.happiness}`);
        },

        // Increases energy
        feed() {
            this.energy += 10;
            console.log(`${this.name} has eaten! Energy is now ${this.energy}.`);
        },

        // Increases happiness but decreases energy
        play() {
            if (this.energy > 0) {
                this.happiness += 10;
                this.energy -= 5;
                console.log(`${this.name} played! Happiness: ${this.happiness}, Energy: ${this.energy}`);
            } else {
                console.log(`${this.name} is too sleepy to play.`);
            }
        },
    };
}