// Takes an array and returns only the numbers not the strings.
function filter_list(arr) {
  return arr.filter(str => typeof str == "number");
}

array = [1, 2, 3, "4", "5", 6, 7, 8, "9", 10];

console.log(filter_list(array));
