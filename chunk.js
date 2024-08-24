var chunk = function (arr, size) {
  var ans = [];
  var miniAns = [];
  for (var a = 0; a < arr.length; a++) {
    miniAns.push(arr[a]);
    if (miniAns.length == size) {
      ans.push(miniAns);
      miniAns = [];
    }
  }
  if (miniAns.length != 0) {
    ans.push(miniAns);
  }
  return ans;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
