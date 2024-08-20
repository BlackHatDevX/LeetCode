// https://leetcode.com/problems/clumsy-factorial/

n = 10;

var clumsy = function (n) {
  let currentOp = "*";
  let tempAns = n;
  let ans = [];
  for (var a = n - 1; a > 0; a--) {
    if (currentOp == "*") {
      tempAns = tempAns * a;
      currentOp = "/";
    } else if (currentOp == "/") {
      tempAns = Math.trunc(tempAns / a);
      currentOp = "+";
    } else if (currentOp == "+") {
      tempAns = tempAns + a;
      ans.push(tempAns);
      tempAns = 0;
      currentOp = "-";
    } else if (currentOp == "-") {
      tempAns = tempAns - a;
      currentOp = "*";
    }
  }
  ans.push(tempAns);
  finalAns = 0;
  for (a in ans) {
    finalAns = finalAns + ans[a];
  }
  return finalAns;
};

console.log(clumsy(n));
