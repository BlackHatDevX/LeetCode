// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

class Solution {
  int getLucky(String s, int k) {
    var chars = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    var ans = "";
    for (var a = 0; a < s.length; a++) {
      ans = ans + (chars.indexOf(s[a]) + 1).toString();
    }
    var newAns = 0;
    while (k > 0) {
      newAns = 0;
      for (var a = 0; a < ans.length; a++) {
        newAns = newAns + int.parse(ans[a]);
      }
      ans = newAns.toString();
      k = k - 1;
    }
    return int.parse(ans);
  }
}
