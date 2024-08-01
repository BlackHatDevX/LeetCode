//leetcode.com/problems/sort-list/

https: var sortList = function (head) {
  // ll to array
  let array = [];
  let newHead = head;
  while (newHead) {
    array.push(newHead.val);
    newHead = newHead.next;
  }
  array.sort(function (a, b) {
    return a - b;
  });
  let newAns = head;
  for (a = 0; a < array.length; a++) {
    newAns.val = array[a];
    newAns = newAns.next;
  }
  return head;
};
