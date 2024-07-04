// https://leetcode.com/problems/plus-one/submissions/1309700225/

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

var plusOne = function (digits) {
  let d = "";
  digits.map((e) => {
    d = d + e;
  });
  let newd = BigInt(d) + 1n;
  newd = String(newd);
  let finalArray = [];
  for (var a = 0; a < newd.length; a++) {
    let k = newd[a];
    finalArray.push(Number(k));
  }
  return finalArray;
};

console.log(plusOne(digits));
