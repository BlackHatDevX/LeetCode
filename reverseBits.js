// https://leetcode.com/problems/reverse-bits/

var reverseBits = function (num) {
  // decimal to binary
  num = num.toString(2);

  // make it 32 bit if it is not
  let moreZero = 32 - num.length;
  while (moreZero != 0) {
    num = "0" + num;
    moreZero--;
  }

  // convert binary to decimal in reversed manner
  let ans = 0;
  let pow = 0;
  for (let a = 0; a < 32; a++) {
    let k = Number(num[a]) * 2 ** pow;
    ans = ans + k;
    pow++;
  }
  return ans;
};

console.log(reverseBits(43261596));
