// https://leetcode.com/problems/clumsy-factorial/

main() {
  print(clumsy(10));
}

var clumsy = (n) {
  var currentOp = "*";
  var tempAns = n;
  var ans = [];
  for (var a = n - 1; a > 0; a--) {
    if (currentOp == "*") {
      tempAns = tempAns * a;
      currentOp = "/";
    } else if (currentOp == "/") {
      tempAns = (tempAns ~/ a);
      currentOp = "+";
    } else if (currentOp == "+") {
      tempAns = tempAns + a;
      ans.add(tempAns);
      tempAns = 0;
      currentOp = "-";
    } else if (currentOp == "-") {
      tempAns = tempAns - a;
      currentOp = "*";
    }
  }
  ans.add(tempAns);
  num finalAns = 0;
  for (var x = 0; x < ans.length; x++) {
    finalAns = finalAns + ans[x];
  }
  return finalAns;
};
