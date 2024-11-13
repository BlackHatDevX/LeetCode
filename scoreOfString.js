// https://leetcode.com/problems/score-of-a-string/

var scoreOfString = function (s) {
  var ans = 0;
  var toPush = 0;
  for (var a = 0; a < s.length - 1; a++) {
    toPush = s.charCodeAt(a) - s.charCodeAt(a + 1);
    if (toPush < 0) {
      toPush = toPush * -1;
    }
    ans += toPush;
  }
  return ans;
};
