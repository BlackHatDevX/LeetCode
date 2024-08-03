var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let ptr = head;
  while (list1 || list2) {
    if (list1 && list2) {
      if (list1.val < list2.val) {
        let newNode = new ListNode(list1.val);
        ptr.next = newNode;
        ptr = ptr.next;
        list1 = list1.next;
      } else {
        let newNode = new ListNode(list2.val);
        ptr.next = newNode;
        ptr = ptr.next;
        list2 = list2.next;
      }
    } else if (list1 == null) {
      let newNode = new ListNode(list2.val);
      ptr.next = newNode;
      ptr = ptr.next;
      list2 = list2.next;
    } else if (list2 == null) {
      let newNode = new ListNode(list1.val);
      ptr.next = newNode;
      ptr = ptr.next;
      list1 = list1.next;
    }
  }
  return head.next;
};
