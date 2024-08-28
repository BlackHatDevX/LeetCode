// https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function (s) {
  let ans = "";
  let minus = false;
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < s.length; i++) {
    // handling spaces
    if (s[i] == " ") {
      if (s[i - 1] && s[i - 1] != " ") {
        break;
      }
    }
    //   handling zeros
    else if (s[i] == "0" && ans.length == 0) {
    }
    // handling - and + signs
    else if (s[i] == "-" || s[i] == "+") {
      if (s[i - 1] && s[i - 1] != " ") {
        break;
      }
      if (s[i] == "-") {
        minus = true;
      }
    }
    // pushing the numbers
    else if (nums.includes(s[i])) {
      ans = ans + s[i];
    } else {
      break;
    }
  }

  if (ans.length == 0) {
    return 0;
  } else {
    if (minus) {
      ans = parseInt(ans) * -1;
      if (ans < -2147483648) {
        return -2147483648;
      } else {
        return ans;
      }
    } else {
      ans = parseInt(ans);
      if (ans > 2147483647) {
        return 2147483647;
      } else {
        return ans;
      }
    }
  }
};

console.log(myAtoi("  -67237llokdsf8 + - ijafs"));
