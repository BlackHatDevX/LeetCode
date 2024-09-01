// https://leetcode.com/problems/convert-1d-array-into-2d-array/

construct2DArray(original, m, n) {
  if (m * n != original.length) {
    return [];
  } else {
    var ans = [];
    var number = 0;
    for (var a = 0; a < m; a++) {
      ans.add([]);
      for (var b = 0; b < n; b++) {
        ans[a].add(original[number]);
        number++;
      }
    }
    return ans;
  }
}
