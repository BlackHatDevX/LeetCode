// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function (head) {
  let ans = [];
  while (head) {
    ans.push(head.val);
    head = head.next;
  }
  let newHead = null;
  let current = null;

  for (let i = ans.length; i >= 0; i--) {
    let newNode = new ListNode(ans[i]);

    if (!newHead) {
      newHead = newNode;
      current = newHead;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }

  return newHead.next;
};
