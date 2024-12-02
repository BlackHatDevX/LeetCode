// https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = function (arr) {
  var half = 0;
  var doub = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    half = arr[i] / 2;
    doub = arr[i] * 2;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] == half || arr[j] == doub) {
        return true;
      }
    }
  }
  return false;
};
