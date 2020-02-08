function addBinary(num1, num2) {
  let sum = num1 + num2;
  let binary = "";
  var zero = "0";
  while (sum > 0) {
    binary = (sum % 2) + binary;
    sum = Math.floor(sum / 2);
  }
  while (binary.length < 8) {
    binary = zero + binary;
  }

  return binary;
}

console.log(addBinary(5, 3));
