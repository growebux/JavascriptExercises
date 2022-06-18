const Tiago = {
  firstName: "Tiago",
  lastName: "Lopes",
  age: 2022,
  born: 1920,
  friends: ["Michael", "Brenno", "Ricardo"],
  drivesLicense: true,

  calcAge: function () {
    this.age = 2022 - this.born;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}`;
  },
};

console.log(
  `${Tiago.firstName} has ${Tiago.friends.length} friend, and his best friend is called ${Tiago.friends[0]}.`
);
console.log(Tiago.getSummary());
