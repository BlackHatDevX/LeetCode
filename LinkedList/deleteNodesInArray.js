// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

var modifiedList = function (nums, head) {
  let numsSet = new Set(nums);
  let newHead = new ListNode(0);
  let current = newHead;
  while (head) {
    if (!numsSet.has(head.val)) {
      let newNode = new ListNode(head.val);
      current.next = newNode;
      current = current.next;
    }
    head = head.next;
  }
  return newHead.next;
};
