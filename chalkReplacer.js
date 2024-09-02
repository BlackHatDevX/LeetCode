// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let total = 0;
  for (var a = 0; a < chalk.length; a++) {
    total = total + chalk[a];
  }
  let cod = true;
  let balance = 0;
  while (cod) {
    if (k <= total) {
      balance = k;
      cod = false;
      while (true) {
        for (var a = 0; a < chalk.length; a++) {
          balance = balance - chalk[a];
          if (balance < 0) {
            return a;
          }
        }
      }
    }
    k = k - total;
  }
};

console.log(chalkReplacer([5, 1, 5], 22));
