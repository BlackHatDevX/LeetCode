// https://leetcode.com/problems/rotate-string/
var rotateString = function (s, goal) {
  var arr = s.split("");
  var len = arr.length;
  for (var a = 0; a < len; a++) {
    // shifter
    var leftmost = arr[0];
    for (var b = 0; b < len - 1; b++) {
      arr[b] = arr[b + 1];
    }
    // update the right most
    arr[len - 1] = leftmost;
    if (arr.join("") == goal) {
      return true;
    }
  }
  return false;
};
