function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, "");
  return str;
}

console.log(disemvowel("I Love DigtialCrafts!!"));
