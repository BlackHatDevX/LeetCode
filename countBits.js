// https://leetcode.com/problems/counting-bits/

var countBits = function (n) {
  let ans = [];
  for (let a = 0; a <= n; a++) {
    let tempBin = a.toString(2);
    let tempTotal = 0;
    for (let b = 0; b < tempBin.length; b++) {
      tempTotal = tempTotal + Number(tempBin[b]);
    }
    ans.push(tempTotal);
  }
  return ans;
};

console.log(countBits(5));
