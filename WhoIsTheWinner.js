const calcAverage = (a, b, c) => (a + b + c) / 3;

const Dolphins = calcAverage(30, 1, 2);
const Koalas = calcAverage(50, 40, 3);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin is the winner (${avgDolphins})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas is the winner (${avgKoalas})`);
  } else {
    console.log(`No one win`);
  }
};

checkWinner(Dolphins, Koalas);
