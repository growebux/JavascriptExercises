//Create a array of numbers
const year = [1956, 1994, 1991];

//Create a function to calculate the the user's age'
const calcAge = function (year) {
  return 2022 - year;
};

//Pass the sequence of years from the array to the function year.
const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);

//Access the last element of the array
const age3 = calcAge(year[year.length - 1]);

//Create a new array to hold the results
const newArray = [];

//Push the content to the array
newArray.push(age1, age2, age3);

console.log(newArray);
