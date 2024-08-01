// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function (node) {
  while (node.next.next) {
    node.val = node.next.val;
    node = node.next;
  }
  node.val = node.next.val;
  node.next = null;
  console.log(node);
};
