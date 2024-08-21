// https://leetcode.com/problems/power-of-three/submissions/1363541580/

let n = 27;

var isPowerOfThree = (x) => {
  if (x === 1.0) {
    return true;
  } else if (x < 1.0) {
    return false;
  }
  return isPowerOfThree(x / 3);
};
console.log(isPowerOfThree(n));
