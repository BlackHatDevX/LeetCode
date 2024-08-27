// https://leetcode.com/problems/isomorphic-strings/

var s = "12";
var t = "42";

var isIsomorphic = function (s, t) {
  var dictionaryOne = {};
  for (var i = 0; i < s.length; i++) {
    dictionaryOne[String(s[i]) + "a"] = i;
  }
  var dictionaryTwo = {};
  for (var j = 0; j < t.length; j++) {
    dictionaryTwo[String(t[j]) + "a"] = j;
  }
  console.log([dictionaryOne, dictionaryTwo]);
  var arrOne = Object.values(dictionaryOne);
  var arrTwo = Object.values(dictionaryTwo);
  console.log([arrOne, arrTwo]);
  let lengthOne = arrOne.length;
  if (lengthOne != arrTwo.length) {
    return false;
  }
  for (var k = 0; k < lengthOne; k++) {
    if (arrOne[k] != arrTwo[k]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic(s, t));
