// It takes a string and return a boolean if the number of X's = O's, Case doesn't matter.
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return x.length === o.length;
}

xoStr1 = "xoxoxOXOXOXwelkjsdifj";
xoStr2 = "xoxoxOXOXOXO";

console.log(XO(xoStr1));
console.log(XO(xoStr2));
