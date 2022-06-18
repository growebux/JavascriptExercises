function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`Animal is ${this.name}`);
};

class Dog extends Animal {
  speak() {
    return console.log("The animal is barking");
  }
}

let animalName = new Animal("Bob");

let newDog = new Dog("Bob");

animalName.speak();
newDog.speak();
