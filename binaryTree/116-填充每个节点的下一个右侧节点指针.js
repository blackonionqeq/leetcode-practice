/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * 
 * 思路：分两部分，一部分处理子树内的连接，一部分处理子树间的连接即可，非常简单
 */
function bindLeftToRight(left, right) {
  if (left.right !== null && right.left !== null) {
    left.right.next = right.left
    // 递归处理子树间的连接
    bindLeftToRight(left.right, right.left)
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) return null
  if (root.left !== null) {
    connect(root.left)
    if (root.right !== null) {
      connect(root.right)
      root.left.next = root.right
      bindLeftToRight(root.left, root.right)
    }
  }
  return root
};