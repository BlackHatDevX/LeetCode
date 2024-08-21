// https://leetcode.com/problems/power-of-four

let n = 16;

var isPowerOfFour = (x) => {
  if (x === 1.0) {
    return true;
  } else if (x < 1.0) {
    return false;
  }
  return isPowerOfFour(x / 4);
};
console.log(isPowerOfFour(n));
