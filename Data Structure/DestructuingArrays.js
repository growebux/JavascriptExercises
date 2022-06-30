const restaurant = {
  name: "Chique Food",
  location: "Vancouver",
  categories: ["Italian", "Pizza", "Vegetarian", "Organic"],
  starterMenu: [
    "Focaccia",
    "Bruschetta",
    "Garlic Bread",
    "Banana",
    "Caprese Salad",
  ],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const [a, , b] = restaurant.categories;

console.log(a, b);

let newDog = [5, 3, 4, 3, [8, 9]];
let [q, w, , d, [t, o]] = newDog;
console.log(q, w, d, t, o);
