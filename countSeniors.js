// https://leetcode.com/problems/number-of-senior-citizens/

let details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"];
var countSeniors = function (details) {
  let ans = 0;
  for (a = 0; a < details.length; a++) {
    if (parseInt(details[a].slice(11, 13)) > 60) {
      ans += 1;
    }
  }
  return ans;
};

console.log(countSeniors(details));
