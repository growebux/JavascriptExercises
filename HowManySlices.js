function _cutPieces(fruit) {
  return fruit * 4;
}

function fruits(banana, apples) {
  const bananaSlices = _cutPieces(banana);
  const appleSlices = _cutPieces(apples);

  const info = `The total of banana slices is ${bananaSlices} and the total of apple slices is ${appleSlices}`;
  return info;
}

console.log(fruits(10, 20));
