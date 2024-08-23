// https://leetcode.com/problems/search-insert-position/

void main() {
  var nums = [1, 3, 5, 6];
  var target = 7;
  print(searchInsert(nums, target));
}

searchInsert(nums, target) {
  var len = nums.length;
  for (var x = 0; x < len; x++) {
    if (nums[x] == target) {
      return x;
    } else if (nums[x] > target) {
      return x;
    }
  }
  return len;
}
