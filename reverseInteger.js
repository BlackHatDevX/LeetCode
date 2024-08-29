var reverse = function (x) {
  let sign = 1;
  let ans = "";
  let start = 0;
  x = String(x);
  if (x[0] == "-") {
    sign = -1;
    start = 1;
  }
  for (let a = x.length - 1; a >= start; a--) {
    ans = ans + x[a];
  }
  ans = Number(ans) * sign;
  if (ans < 2147483647 && ans > -2147483648) {
    return ans;
  } else {
    return 0;
  }
};

console.log(reverse(-14135));
