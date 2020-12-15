function Animal(name) {
    this.name = name
}

Animal.prototype.makeSound = function() {
    return `${this.name} makes a Generic Sound!`
}

function Dog(name) {
    Animal.call(this, name)
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype)


const animal = new Animal(`Anini`)
console.log(animal)

const dog = new Dog(`Doggy`)
console.log(dog.makeSound())
