// https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 1 + 1 = 0 and carry 1
  // 1 + 0 = 1
  // 1 + 1 + 1 = 1 and carry 1
  // 0 + 0 = 0
  // R to L
  let aLen = a.length;
  let bLen = b.length;
  if (aLen > bLen) {
    let zeros = "0".repeat(aLen - bLen);
    b = zeros + b;
  } else if (bLen > aLen) {
    let zeros = "0".repeat(bLen - aLen);
    a = zeros + a;
  }
  let carry = 0;
  let ans = "";
  for (var i = b.length - 1; i >= 0; i--) {
    if (
      (a[i] == 1 && b[i] == 1 && carry == 0) ||
      (a[i] == 0 && b[i] == 1 && carry == 1) ||
      (a[i] == 1 && b[i] == 0 && carry == 1)
    ) {
      carry = 1;
      ans = "0" + ans;
    } else if (
      (a[i] == 1 && b[i] == 0 && carry == 0) ||
      (a[i] == 0 && b[i] == 1 && carry == 0) ||
      (a[i] == 0 && b[i] == 0 && carry == 1)
    ) {
      carry = 0;
      ans = "1" + ans;
    } else if (a[i] == 0 && b[i] == 0 && carry == 0) {
      carry = 0;
      ans = "0" + ans;
    } else if (a[i] == 1 && b[i] == 1 && carry == 1) {
      carry = 1;
      ans = "1" + ans;
    }
  }
  if (carry != 0) {
    ans = carry + ans;
  }
  return ans;
};
