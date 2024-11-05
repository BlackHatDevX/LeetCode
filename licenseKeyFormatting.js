// https://leetcode.com/problems/license-key-formatting/

var licenseKeyFormatting = function (s, k) {
  // format the clean string
  let ans = "";
  let counter = 0;
  for (var a = s.length - 1; a >= 0; a--) {
    if (s[a] != "-") {
      if (counter == k) {
        ans += "-";
        counter = 0;
      }
      ans += s[a].toUpperCase();
      counter++;
    }
  }
  let finalAns = "";
  for (var a = ans.length - 1; a >= 0; a--) {
    finalAns += ans[a];
  }
  return finalAns;
};
