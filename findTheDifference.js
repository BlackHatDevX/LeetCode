// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var arr = s.split("");
  for (let a of t) {
    if (arr.includes(a)) {
      const temp = arr.indexOf(a);
      arr.splice(temp, 1);
    } else {
      return a;
    }
  }
};
