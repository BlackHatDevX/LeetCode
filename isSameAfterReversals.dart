// https://leetcode.com/problems/a-number-after-a-double-reversal/

void main() {
  print(isSameAfterReversals(526));
}

isSameAfterReversals(num) {
  reverse(int num) {
    String num1 = (num).toString();
    var rev = "";
    for (var a = num1.length - 1; a >= 0; a--) {
      rev = rev + num1[a];
    }
    return (int.parse(rev));
  }

  ;
  var reversed = reverse(reverse(num));
  return reversed == num;
}
