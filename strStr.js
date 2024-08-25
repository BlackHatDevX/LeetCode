// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  var ans = "";
  var NeedleLength = needle.length;
  var StackLength = haystack.length;
  for (var a = 0; a < StackLength; a++) {
    for (var b = 0; b < NeedleLength; b++) {
      ans = ans + haystack[a + b];
    }
    if (ans == needle) {
      return a;
    } else {
      ans = "";
    }
  }
  return -1;
};

console.log(strStr("jamesbondispro", "pro"));
