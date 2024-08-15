// https://leetcode.com/problems/merge-k-sorted-lists/

var mergeKLists = function (lists) {
  let LinkedList = new ListNode();
  let arr = [];
  for (let a = 0; a < lists.length; a++) {
    while (lists[a]) {
      arr.push(lists[a].val);
      lists[a] = lists[a].next;
    }
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  let ptr = LinkedList;
  for (let b = 0; b < arr.length; b++) {
    let newNode = new ListNode(arr[b]);
    ptr.next = newNode;
    ptr = ptr.next;
  }
  return LinkedList.next;
};
