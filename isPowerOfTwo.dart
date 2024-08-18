void main() {
  var n = 16;

  bool isPowerOfTwo(var n) {
    if (n <= 0) return false;

    while (n > 1) {
      if (n % 2 != 0) return false;
      n = n / 2;
    }
    return true;
  }

  print(isPowerOfTwo(n));
}
