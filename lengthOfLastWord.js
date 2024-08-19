var s = " jash  is    noob  ";

var lengthOfLastWord = function (s) {
  let count = 0;
  for (a = s.length - 1; a >= 0; a--) {
    if (s[a] != " ") {
      count = count + 1;
    } else if (count != 0) {
      return count;
    }
  }
  return count;
};

console.log(lengthOfLastWord(s));
