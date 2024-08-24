void main() {
  var arr = [1, 2, 3, 4, 5, 6, 7];
  var size = 3;
  print(chunk(arr, size));
}

chunk(arr, size) {
  var ans = [];
  var miniAns = [];
  for (var a = 0; a < arr.length; a++) {
    miniAns.add(arr[a]);
    if (miniAns.length == size) {
      ans.add(miniAns);
      miniAns = [];
    }
  }
  if (miniAns.length != 0) {
    ans.add(miniAns);
  }
  return ans;
}
