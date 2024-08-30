// https://leetcode.com/problems/a-number-after-a-double-reversal/

var isSameAfterReversals = function (num) {
  let reverse = (num) => {
    num = String(num);
    let rev = "";
    for (let a = num.length - 1; a >= 0; a--) {
      rev = rev + num[a];
    }
    return Number(rev);
  };
  let reverse1 = reverse(num);
  let reverse2 = reverse(reverse1);
  return reverse2 == num;
};

console.log(isSameAfterReversals(526));
