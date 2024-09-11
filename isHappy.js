// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var loop = (num) => {
    num = num.toString();
    let sum = 0;
    for (a of num) {
      sum = sum + a ** 2;
    }
    console.log(sum);
    return sum;
  };
  let chk = loop;
  let arr = [];
  while (n != 1) {
    n = loop(n);
    arr.push(n);
    if (n in arr) {
      if (n != 1) {
        return false;
      }
    }
  }
  return true;
};
