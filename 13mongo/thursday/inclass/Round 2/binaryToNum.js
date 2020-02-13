// Take a array of spererated binary code and convert it back to a whole number.

const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);

binaryArray = [1, 1, 1, 1, 1, 1, 1, 1];
// binaryArray = [0, 0, 0, 0, 0, 0, 1, 1];

console.log(binaryArrayToNumber(binaryArray));
