// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function (head, n) {
  let counter = head;
  let final = head;
  length = 0;
  // getting total length of linked list
  while (counter) {
    length += 1;
    counter = counter.next;
  }

  //   getting the dot node which is the node just previous to the node to be skipped
  let dot = length - n;

  //   if dot = 0 simply return empty ll
  if (dot == 0) {
    return head.next;
  }

  // finally skipping node next to dot
  let counterTwo = 0;
  while (final) {
    counterTwo += 1;
    if (counterTwo == dot) {
      // dot caught now jump over the N-th node
      final.next = final.next.next;
    } else {
      final = final.next;
    }
  }

  // yey here we go
  return head;
};
