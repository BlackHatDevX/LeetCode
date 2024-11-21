// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  var result = [];
  const max = Math.max(...candies);
  for (a of candies) {
    if (a + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
