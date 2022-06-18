class Camera {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(`The camera you entered is ${this.name}`);
  }
  setName() {
    if (this.name === "Sony") {
      console.log(`Congratulation you choose ${this.name}`);
    } else {
      console.log("We have only Sony cameras available");
    }
  }
}

let newInput = new Camera("Nikon");
newInput.getName();
newInput.setName();
