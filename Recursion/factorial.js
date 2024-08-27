var recursiveFactorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

var whileFactorial = (n) => {
  var ans = 1;
  for (var a = 1; a <= n; a++) {
    ans = ans * a;
  }
  return ans;
};

console.log(recursiveFactorial(3));
console.log(whileFactorial(3));

// 3 * 2 * 1 = 6
