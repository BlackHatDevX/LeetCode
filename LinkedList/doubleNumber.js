// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/

var doubleIt = function (head) {
  let num = "";
  let ptr = head;
  while (ptr) {
    num += ptr.val;
    ptr = ptr.next;
  }
  num = "" + BigInt(num) * 2n;
  let headPtr = head;
  for (a = 0; a < num.length; a++) {
    headPtr.next = new ListNode(num[a]);
    headPtr = headPtr.next;
  }

  return head.next;
};
