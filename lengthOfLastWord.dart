main() {
  var s = "   jash is  noob  ";
  print(lengthOfLastWord(s));
}

int lengthOfLastWord(String s) {
  var count = 0;
  for (var a = s.length - 1; a >= 0; a--) {
    if (s[a] != " ") {
      count = count + 1;
    } else if (count != 0) {
      return (count);
    }
  }
  return (count);
}
