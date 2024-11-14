// https://leetcode.com/problems/add-two-promises/

var addTwoPromises = async function (promise1, promise2) {
  var ans = 0;
  await promise1.then((e) => {
    ans += e;
  });
  await promise2.then((e) => {
    ans += e;
  });
  return ans;
};
