void main() {
  String haystack = "jashispro";
  String needle = "pro";
  print(strStr(haystack, needle));
}

strStr(haystack, needle) {
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
}
