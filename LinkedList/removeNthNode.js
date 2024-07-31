// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  let counter = head;
  let final = head;
  length = 0;
  while (counter) {
    length += 1;
    counter = counter.next;
  }
  let dot = length - n;
  if (dot == 0) {
    return head.next;
  }
  let counterTwo = 0;
  while (final) {
    counterTwo += 1;
    if (counterTwo == dot) {
      final.next = final.next.next;
    } else {
      final = final.next;
    }
  }
  return head;
};
