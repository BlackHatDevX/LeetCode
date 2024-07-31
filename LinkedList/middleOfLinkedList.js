// https://leetcode.com/problems/middle-of-the-linked-list/

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
var middleNode = function (head) {
  let nums = [];
  let dHead = head;
  while (dHead) {
    nums.push(dHead.val);
    dHead = dHead.next;
  }
  let mid = 0;
  if (nums.length % 2 == 0) {
    mid = nums.length / 2 + 1;
  } else {
    mid = (nums.length + 1) / 2;
  }
  console.log(mid);
  let count = 0;
  while (head) {
    if (count != mid - 1) {
      count = count + 1;
      head = head.next;
    } else {
      return head;
    }
  }
};

// another solution

var middleNode = function (head) {
  let slowPtr = head;
  let fastPtr = head;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
};
