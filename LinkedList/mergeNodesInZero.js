// https://leetcode.com/problems/merge-nodes-in-between-zeros/

var mergeNodes = function (head) {
  let newHead = new ListNode();
  let ptr = newHead;
  let sum = 0;
  while (head) {
    if (head.val == 0) {
      if (sum != 0) {
        let node = new ListNode(sum);
        ptr.next = node;
        ptr = ptr.next;
        sum = 0;
      }
    } else {
      sum = sum + head.val;
    }
    head = head.next;
  }
  return newHead.next;
};
