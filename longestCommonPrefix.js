// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let first = strs[0];
  let start = 0;
  let len = strs.length;
  if (len == 1) {
    return first;
  }
  while (true) {
    for (let a = 1; a < len; a++) {
      if (first[start] != strs[a][start] || start >= first.length) {
        return prefix;
      }
    }
    prefix = prefix + first[start];
    start++;
  }
  return prefix;
};
