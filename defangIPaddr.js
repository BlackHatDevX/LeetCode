// https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  var ans = "";
  for (a of address) {
    if (a == ".") {
      ans += "[.]";
    } else {
      ans += a;
    }
  }
  return ans;
};
