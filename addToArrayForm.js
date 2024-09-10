// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let n = "";
  for (a of num) {
    n = n + a;
  }
  let final = (BigInt(n) + BigInt(k)).toString();
  let ans = [];
  for (a of final) {
    ans.push(a);
  }
  return ans;
};
