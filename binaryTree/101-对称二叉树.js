/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 思路一：
 * 首先是最直接的解法。先把左子树翻转，然后判断是否和右子树相等即可。
 */
function reversalTree(root) {
  if (!root) return root
  let tmp = root.left
  root.left = root.right
  root.right = tmp
  // 不管左右子树存在与否，递归就完事了
  reversalTree(root.left)
  reversalTree(root.right)
  return root
}
function isEqualTree(treeA, treeB) {
  if (treeA) {
    if (!treeB) return false
  } else if (treeB) {
    if (!treeA) return false
  } else if (!treeA && !treeB) return true
  // 都有值还要判断是否相等，相等才判断左右子树的情况
  if (treeA.val !== treeB.val) return false
  // 左右子树递归判断即可
  return isEqualTree(treeA.left, treeB.left) && isEqualTree(treeA.right, treeB.right)
}
var isSymmetric = function(root) {
  if (!root) return true
  else if (root.left && !root.right) {
    return false
  } else if (!root.left && root.right) {
    return false
  } else {
    const reverseLeft = reversalTree(root.left)
    console.log(reverseLeft, root.right)
    return isEqualTree(reverseLeft, root.right)
  }
};