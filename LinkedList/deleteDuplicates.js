// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  var result = new ListNode(0);
  var resultPtr = result;
  while (head.next) {
    if (head.val != head.next.val) {
      var newNode = new ListNode(head.val);
      resultPtr.next = newNode;
      resultPtr = resultPtr.next;
    }
    head = head.next;
  }
  resultPtr.next = new ListNode(head.val);
  return result.next;
};
