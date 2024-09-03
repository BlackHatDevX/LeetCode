// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

var getLucky = function (s, k) {
  let chars = [
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
    "z",
  ];
  let ans = "";
  for (a in s) {
    ans = ans + (chars.indexOf(s[a]) + 1);
  }
  let newAns = 0;
  while (k > 0) {
    newAns = 0;
    for (a of ans) {
      newAns = newAns + Number(a);
    }
    ans = newAns.toString();
    k = k - 1;
  }
  return parseInt(ans);
};
