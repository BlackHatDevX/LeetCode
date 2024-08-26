var nums = [1, 2, 3, 5, 1, 2, 3];

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (var a = 0; a < nums.length; a = a + 2) {
    if (nums[a] != nums[a + 1]) {
      return nums[a];
    }
  }
};

console.log(singleNumber(nums));
