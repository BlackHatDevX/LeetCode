// https://leetcode.com/problems/rearrange-words-in-a-sentence/

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  var arr = text.split(" ");
  var lens = [];
  for (a of arr) {
    lens.push(a.length);
  }
  arr[0] = arr[0].toLowerCase();
  var sortedLens = [];
  for (a of lens) {
    sortedLens.push(a);
  }
  var ans = [];
  sortedLens.sort((a, b) => a - b);
  for (a of sortedLens) {
    let k = lens.indexOf(a);
    lens[k] = 0;
    ans.push(arr[k]);
  }
  let k = "";
  for (var a = 0; a < ans[0].length; a++) {
    let toPush = ans[0][a];
    if (a == 0) {
      toPush = toPush.toUpperCase();
    }
    k = k + toPush;
  }
  ans[0] = k;
  let finalAns = ans.join(" ");
  // console.log(arr, lens, sortedLens)
  return finalAns;
};
