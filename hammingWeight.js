// https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function (n) {
  let bin = n.toString(2);
  let ans = 0;
  for (a in bin) {
    if (bin[a] == "1") {
      ans = ans + 1;
    }
  }
  return ans;
};

console.log(hammingWeight(11));
