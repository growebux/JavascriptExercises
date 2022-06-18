//Create a array of strings
const user = ["Bob", "Dude", "34 year old"];

//Console the elements of the array in reverse
for (let i = user.length - 1; i >= 0; i--) {
  console.log(user[i]);
}
//Generate a random number and return a decimal
let i = Math.trunc(Math.random() * 6) + 1;

// If the number is different than  6 return a string and check again if the number is different than 6, if it is return the number.
while (i !== 6) {
  console.log(`Ola ${i}`);
  i = Math.trunc(Math.random() * 6) + 1;
  if (i === 6) {
    console.log("The number is 6");
  }
}

//Extra

for (let i = 0; i <= 5; i++) {
  console.log(`This number is repeated ${i}`);
}

let tipsArray = [10, 20, 30, 40];
let newArray = [];

for (let i = 0; i < tipsArray.length; i++) {
  newArray.push(100 + tipsArray[i]);
}

console.log(newArray);

for (let goOut = 1; goOut < 4; goOut++) {
  console.log(`Check the time and go out ${goOut}`);
  for (let doExercice = 0; doExercice < 6; doExercice++) {
    console.log(`Taks, Run, Swin, Walk, Talk`);
  }
}
