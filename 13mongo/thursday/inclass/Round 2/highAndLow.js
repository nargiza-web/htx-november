// Takes a array of numbers and return the lowest and highest numbers.
function highAndLow(numbers) {
  return (
    "Lowest Number Is: " +
    Math.min.apply(null, numbers) +
    " and Highest Number Is: " +
    Math.max.apply(null, numbers)
  );
}

numberArray = [0923, 23094, 1, 30498230458, 324, 43, 4, 323, 4534521];

console.log(highAndLow(numberArray));
