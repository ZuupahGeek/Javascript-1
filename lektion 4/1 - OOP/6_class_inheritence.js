class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound () {
        console.log(`Generic Sound!`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name)
    }
}
class Pig extends Animal {
    constructor(name) {
        super(name)
    }
}

const dog = new Dog(`Brutus`)
const horse = new Horse(`Epona`)
const pig = new Pig(`Babe`)
dog.makeSound()
horse.makeSound()
pig.makeSound()