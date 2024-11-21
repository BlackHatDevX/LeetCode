// https://leetcode.com/problems/permutation-difference-between-two-strings/

var findPermutationDifference = function (s, t) {
  var ans = 0;

  for (var i = 0; i < s.length; i++) {
    ans += Math.abs(i - s.indexOf(t[i]));
  }
  return ans;
};
