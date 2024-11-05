// https://leetcode.com/problems/jewels-and-stones

var numJewelsInStones = function (jewels, stones) {
  let ans = 0;
  for (a of jewels) {
    for (b of stones) {
      if (a === b) {
        ans += 1;
      }
    }
  }
  return ans;
};
