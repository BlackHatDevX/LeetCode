// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  // findLength
  let len = 0;
  let ptr = head;
  while (ptr) {
    len += 1;
    ptr = ptr.next;
  }
  // handeling special cases
  if (len == 2) {
    return new ListNode(head.val);
  }
  if (len == 1) {
    return head.next;
  }
  // finding which one to remove
  let toRemove = 0;
  if (len % 2 == 0) {
    toRemove = len / 2 + 1;
  } else {
    toRemove = (len + 1) / 2;
  }

  // logic to remove the bad node
  ptr = head;
  let count = 0;
  while (ptr) {
    count += 1;
    if (count == toRemove - 1) {
      ptr.next = ptr.next.next;
      ptr = ptr.next;
    } else ptr = ptr.next;
  }
  return head;
};
