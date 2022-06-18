const calcAge3 = (birthYeahr) => 2020 - birthYeahr;
const age3 = calcAge3(1991);
console.log(age3);

const yearUnitRetirement = (birthYeahr, name) => {
  const age = 2020 - birthYeahr;
  const retirement = 65 - age;
  return `${name} retires in ${retirement}`;
};

console.log(yearUnitRetirement(1955, "Bob"));
