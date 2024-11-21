// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function (accounts) {
  var ans = 0;
  var total;
  for (person of accounts) {
    total = 0;
    for (money of person) {
      total += money;
    }
    if (total > ans) {
      ans = total;
    }
  }
  return ans;
};
