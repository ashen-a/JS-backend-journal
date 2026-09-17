function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog")
console.log(dog.sound())


function Drink(name) {
    if (!new) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea")
let coffee = Drink("coffee")