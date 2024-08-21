// https://leetcode.com/problems/power-of-four

void main() {
  var n = 16;
  print(isPowerOfFour(n));
}

isPowerOfFour(x) {
  if (x == 1.0) {
    return true;
  } else if (x < 1.0) {
    return false;
  }
  return isPowerOfFour(x / 4);
}
