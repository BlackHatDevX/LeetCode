// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let ans = [];
  while (head) {
    if (head.val != val) {
      ans.push(head.val);
    }
    head = head.next;
  }
  head = new ListNode(0);
  let ptr = head;
  for (a of ans) {
    let newNode = new ListNode(a);
    ptr.next = newNode;
    ptr = ptr.next;
  }
  return head.next;
};
