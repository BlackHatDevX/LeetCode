// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}

class Solution {
  ListNode? deleteDuplicates(ListNode? head) {
    if (head == null) return head; // Handle empty list case

    var result = ListNode(0); // Dummy node
    var resultPtr = result; // Pointer to build the result list

    while (head != null) {
      // If it's the last node or the current node is not equal to the next one
      if (head.next == null || head.val != head.next!.val) {
        resultPtr.next = head; // Link the node directly
        resultPtr = resultPtr.next!;
      }

      head = head.next; // Move to the next node
    }

    resultPtr.next = null; // Ensure the list ends properly
    return result.next; // Return the list, excluding the dummy node
  }
}
