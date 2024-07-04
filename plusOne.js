// https://leetcode.com/problems/plus-one/solutions/5417478/plus-one-javascript-99-49-beats/

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

var plusOne = function (digits) {
  // defining empty string to push values from array
  let digitsToString = "";
  digits.map((e) => {
    digitsToString = digitsToString + e;
  });
  // converting digits to BigInt and adding 1 to it
  let digitsToInt = BigInt(digitsToString) + 1n;

  // converting digits + 1 to string so we can use it as array
  AnsToString = String(digitsToInt);

  let finalArray = [];
  // pushing every value(after converting into number) of string to array
  for (var a = 0; a < AnsToString.length; a++) {
    let temp = AnsToString[a];
    finalArray.push(Number(temp));
  }
  return finalArray;
};

console.log(plusOne(digits));
