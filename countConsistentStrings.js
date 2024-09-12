// https://leetcode.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let allowedWords = allowed.split("");
  let ans = 0;
  for (word of words) {
    let valid = true;
    for (alphabet of word) {
      if (!allowedWords.includes(alphabet)) {
        valid = false;
      }
    }
    if (valid) {
      ans = ans + 1;
    }
  }
  return ans;
};
