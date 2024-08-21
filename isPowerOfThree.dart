// https://leetcode.com/problems/power-of-three/submissions/1363541580/

void main() {
  var n = 27;
  print(isPowerOfThree(n));
}

isPowerOfThree(x) {
  if (x == 1.0) {
    return true;
  } else if (x < 1.0) {
    return false;
  }
  return isPowerOfThree(x / 3);
}
