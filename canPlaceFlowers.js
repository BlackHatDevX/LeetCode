// https://leetcode.com/problems/can-place-flowers/

var canPlaceFlowers = function (flowerbed, n) {
  var ans = 0;
  var len = flowerbed.length;

  // handle base case
  if (len == 1) {
    if (flowerbed[0] == 0) {
      if (n <= 1) {
        return true;
      } else {
        return false;
      }
    } else if (n == 0) {
      return true;
    } else return false;
  }

  //   check starting condition
  if (flowerbed[0] == 0 && flowerbed[1] == 0) {
    flowerbed[0] = 1;
    ans += 1;
  }

  // check mid condition
  for (var a = 1; a < len - 1; a++) {
    if (flowerbed[a - 1] == 0 && flowerbed[a] == 0 && flowerbed[a + 1] == 0) {
      flowerbed[a] = 1;
      ans += 1;
    }
  }

  // check end condition
  if (flowerbed[len - 1] == 0 && flowerbed[len - 2] == 0) {
    ans += 1;
  }

  // check answer
  if (ans >= n) {
    return true;
  } else {
    return false;
  }
};
