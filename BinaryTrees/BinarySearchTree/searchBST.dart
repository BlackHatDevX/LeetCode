// https://leetcode.com/problems/search-in-a-binary-search-tree/

class TreeNode {
  int val;
  TreeNode? left;
  TreeNode? right;
  TreeNode([this.val = 0, this.left, this.right]);
}

class Solution {
  TreeNode? searchBST(TreeNode? root, int val) {
    if (root == null) {
      return root;
    }

    if (val < root.val) {
      return searchBST(root.left, val);
    } else if (val > root.val) {
      return searchBST(root.right, val);
    } else {
      return root;
    }
  }
}
