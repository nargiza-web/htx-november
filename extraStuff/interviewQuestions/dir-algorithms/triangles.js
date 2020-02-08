function tri(num1, num2, num3) {
  var Asq = num1 * num1;
  var Bsq = num2 * num2;
  var Csq = num3 * num3;
  var A2B2 = Asq + Bsq;
  var A2C2 = Asq + Csq;
  var B2C2 = Bsq + Csq;
  if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Triangle");
  } else {
    console.log("Nope");
  }
  if (Asq == B2C2 || Bsq == A2C2 || Csq == A2B2) {
    console.log("That is Right ;)");
  } else {
    console.log("Nope Still");
  }
}

tri(3, 4, 5);
