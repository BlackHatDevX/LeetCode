// https://leetcode.com/problems/isomorphic-strings/

void main() {
  var s = "12";
  var t = "42";
  print(isIsomorphic(s, t));
}

isIsomorphic(s, t) {
  var dictionaryOne = {};
  for (var i = 0; i < s.length; i++) {
    dictionaryOne[(s[i]) + "a"] = i;
  }
  var dictionaryTwo = {};
  for (var j = 0; j < t.length; j++) {
    dictionaryTwo[(t[j]) + "a"] = j;
  }
  print([dictionaryOne, dictionaryTwo]);
  var arrOne = dictionaryOne.values.toList();
  var arrTwo = dictionaryTwo.values.toList();
  print([arrOne, arrTwo]);
  var lengthOne = arrOne.length;
  if (lengthOne != arrTwo.length) {
    return false;
  }
  for (var k = 0; k < lengthOne; k++) {
    if (arrOne[k] != arrTwo[k]) {
      return false;
    }
  }
  return true;
}
