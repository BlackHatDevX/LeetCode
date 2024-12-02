// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

var isPrefixOfWord = function (sentence, searchWord) {
  const arr = sentence.split(" ");
  const lenOfsearch = searchWord.length;
  for (var a = 0; a < arr.length; a++) {
    if (arr[a].slice(0, lenOfsearch) == searchWord) {
      return a + 1;
    }
  }
  return -1;
};
