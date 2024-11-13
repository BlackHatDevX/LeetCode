// https://leetcode.com/problems/return-length-of-arguments-passed/

var argumentsLength = function (...args) {
  var ans = 0;
  for (a of arguments) {
    ans += 1;
  }
  return ans;
};
