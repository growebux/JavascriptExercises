const tip15 = 0.15;
const tip20 = 0.2;
const valueBill = 270;

const tip =
  valueBill <= 300 && valueBill >= 50 ? valueBill * tip15 : valueBill * tip20;

console.log(
  `The bill value is ${valueBill}, the tip was ${tip} and the total was ${
    tip + valueBill
  }`
);
