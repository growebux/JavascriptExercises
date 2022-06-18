function avg() {
  let teamOne = (96 + 108 + 80) / 3;
  let teamTwo = (88 + 91 + 110) / 3;
  let biggerThan = 100 < teamOne || teamTwo;

  if (teamOne > teamTwo) {
    console.log("Team one is the winner");
  } else if (teamOne < teamTwo) {
    console.log("Team two is the winner");
  } else if (teamOne > 100) {
    console.log("Team two is the winner");
  }

  return;
}

avg();

function winner() {
  if (avg > avg) {
    console.log(`The winner is ${avg}`);
  } else {
    console.log(`The winner is ${avg}`);
  }
  return;
}
winner();

avg(96, 108, 89);
avg(88, 91, 110);

whatever((isTrue) => console.log(isTrue));

function whatever(isTrue) {
  return console.log(isTrue);
}
