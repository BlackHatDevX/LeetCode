// https://leetcode.com/problems/student-attendance-record-i/

var checkRecord = function (s) {
  let ans = { A: 0, L: 0 };
  for (i of s) {
    if (i == "A") {
      ans["A"] += 1;
      if (ans["A"] == 2) {
        return false;
      }
      ans["L"] = 0;
    } else if (i == "L") {
      ans["L"] += 1;
      if (ans["L"] >= 3) {
        return false;
      }
    } else {
      ans["L"] = 0;
    }
  }
  return true;
};
