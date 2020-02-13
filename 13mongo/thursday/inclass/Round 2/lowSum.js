// Takes an array and returns the sum of the two lowest numbers.
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

numbersArray1 = [8, 10, 3203948, 1, 0, 2340982309480928340982];
numbersArray2 = [8, 10, 3203948, 2340982309480928340982];
numbersArray3 = [8, 10, 3203948, 2340982309480928340982, 5, 4];

console.log(sumTwoSmallestNumbers(numbersArray1));
console.log(sumTwoSmallestNumbers(numbersArray2));
console.log(sumTwoSmallestNumbers(numbersArray3));
