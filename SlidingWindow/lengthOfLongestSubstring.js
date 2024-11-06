// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;

  let maxLength = 0;
  let left = 0;
  let seenChars = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seenChars.has(s[right])) {
      seenChars.delete(s[left]);
      left++;
    }
    seenChars.add(s[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
