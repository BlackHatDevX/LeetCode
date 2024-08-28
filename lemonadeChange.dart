// https://leetcode.com/problems/lemonade-change/

void main(List<String> args) {
  var bills = [5, 5, 10, 5, 20];
  print(lemonadeChange(bills));
}

lemonadeChange(bills) {
  int fives = 0;
  int tens = 0;
  for (int i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      fives++;
    } else if (bills[i] == 10) {
      if (fives < 0) return false;
      fives--;
      tens++;
    } else if (bills[i] == 20) {
      if (tens == 0) {
        if (fives < 3) return false;
        fives -= 3;
      } else {
        if (fives < 1) return false;
        tens--;
        fives--;
      }
    }
  }
  return true;
}
