// https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = (s) => {
  let minus = false;
  let ans = "";
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let a = 0; a < s.length; a++) {
    // handling spaces
    if (s[a] == " ") {
      if (s[a - 1] && s[a - 1] != " ") {
        break;
      }
    }
    // handling zeros
    else if (s[a] == "0" && ans.length == 0) {
      continue;
    }
    // handling - and + signs
    else if (s[a] == "+" || s[a] == "-") {
      if (s[a - 1] && s[a - 1] != " ") {
        break;
      }
      if (s[a] == "-") {
        minus = true;
      }
    }
    // pushing the number
    else if (numbers.includes(s[a])) {
      ans = ans + s[a];
    } else {
      break;
    }
  }

  if (ans.length == 0) {
    return 0;
  } else {
    ans = Number(ans);
    if (minus) {
      ans = ans * -1;
    }
    if (ans > 2147483647) {
      return 2147483647;
    } else if (ans < -2147483648) {
      return -2147483648;
    } else {
      return ans;
    }
  }
};

console.log(myAtoi("  +12ksdjafl"));
