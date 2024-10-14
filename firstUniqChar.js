/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var len = s.length;
  var exceptionList = [];
  for (var a = 0; a < len; a++) {
    if (!exceptionList.includes(s[a])) {
      for (var b = a + 1; b < len; b++) {
        if (s[a] == s[b]) {
          exceptionList.push(s[a]);
          break;
        } else if (b == len - 1) {
          return a;
        }
      }
    }
  }
  if (!exceptionList.includes(s[len - 1])) {
    return len - 1;
  }
  return -1;
};
