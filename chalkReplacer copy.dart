// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk

void main(List<String> args) {
  print(chalkReplacer([5, 1, 5], 22));
}

chalkReplacer(chalk, k) {
  num total = 0;
  for (int a = 0; a < chalk.length; a++) {
    total = total + chalk[a];
  }
  bool cod = true;
  num balance = 0;
  while (cod) {
    if (k <= total) {
      balance = k;
      cod = false;
      while (true) {
        for (int a = 0; a < chalk.length; a++) {
          balance = balance - chalk[a];
          if (balance < 0) {
            return a;
          }
        }
      }
    }
    k = k - total;
  }
}
