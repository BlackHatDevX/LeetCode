// https://leetcode.com/problems/find-words-containing-character/

var findWordsContaining = function (words, x) {
  let ans = [];
  for (var a = 0; a < words.length; a++) {
    if (words[a].includes(x)) {
      ans.push(a);
    }
  }
  return ans;
};
