// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

// ANS 1
var modifiedList = function (nums, head) {
  let numsSet = new Set(nums);
  let temp = head;
  let ans = [];
  while (temp) {
    console.log(temp.val);
    if (!numsSet.has(temp.val)) {
      ans.push(temp.val);
    }
    temp = temp.next;
  }
  // Create a new linked list from the ans array
  let newHead = new ListNode(ans[0]);
  let current = newHead;

  for (let i = 1; i < ans.length; i++) {
    let newNode = new ListNode(ans[i]);
    current.next = newNode;
    current = current.next;
  }
  return newHead;
};

// ANS 2
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
