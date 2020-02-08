function palindrome(str) {
  str = str.toLowerCase();
  let arr = str.split("");
  arr.reverse();
  newStr = arr.join("");
  return str === newStr;
}

console.log(palindrome("Tacocat"));
console.log(palindrome("Mom"));
console.log(palindrome("Palindrome"));
console.log(palindrome("John"));
