const Tiago = {
  firstName: "Tiago",
  lastName: "Lopes",
  age: 1920,
  friends: ["Michael", "Brenno", "Ricardo"],
  drivesLicense: true,

  calcAge() {
    return 2020 - this.age;
  },
};

console.log(
  `${Tiago.firstName} has ${Tiago.friends.length} friend, and his best friend is called ${Tiago.friends[0]}. Also, his age is ${Tiago.calcAge}`
);
