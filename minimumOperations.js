// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

var minimumOperations = function (nums) {
  var ans = 0;
  for (a of nums) {
    if (a % 3 != 0) {
      ans += 1;
    }
  }
  return ans;
};
