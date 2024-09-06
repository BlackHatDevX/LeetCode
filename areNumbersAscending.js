// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let num = [];
  let oneNum = "";
  for (a of s) {
    if (parseInt(a) || a == "0") {
      oneNum += a;
    }
    if (oneNum != "" && a == " ") {
      num.push(parseInt(oneNum));
      oneNum = "";
    }
  }
  if (oneNum != "") {
    num.push(parseInt(oneNum));
  }
  console.log(num);
  let ptr = num[0];
  for (var a = 1; a < num.length; a++) {
    if (num[a] <= ptr) {
      return false;
    } else {
      ptr = num[a];
    }
  }
  return true;
};
