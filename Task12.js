const array = [4, 87, 56, 2, 44, 90, 12, 15, 32, 17, 33, 5];

array.forEach((el, index) => {
  console.log(`Element at index ${index} is: ${el}`);
});

const newArray = array.filter((el) => {
  if (el % 5 === 0) {
    return el;
  }
});
console.log(newArray);

const incrementedArray = array.map((el) => {
  return el + 100;
});
console.log(incrementedArray);
