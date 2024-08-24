function chunks(arr: any[], size: Number): any[] {
  var ans: any[] = [];
  var miniAns: any[] = [];
  for (var a = 0; a < arr.length; a++) {
    miniAns.push(arr[a]);
    if (miniAns.length == size) {
      ans.push([...miniAns]);
      miniAns = [];
    }
  }
  if (miniAns.length != 0) {
    ans.push(miniAns);
  }
  return ans;
}

console.log(chunks([1, 2, 3, 3, 4, 5, 6, 6, 8], 3));
