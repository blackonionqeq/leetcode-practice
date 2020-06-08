/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 * 
 * 思路：前序和中序的区别是前者先左子树后节点值，后者相反，相同点是右子树的顺序。
 */
var buildTree = function(preorder, inorder, latest = null) {
  if (inorder.length) {
    if (inorder[0] === latest) {
      inorder.shift()
      return null
    }
    if (!preorder.length) return null
    const val = preorder.shift()
    const node = new TreeNode(val)
    if (val !== inorder[0]) {
      // 告诉左子树，当中序遍历遍历到节点值为结束
      node.left = buildTree(preorder, inorder, val)
    } else {
      inorder.shift()
    }
    // 此时已经处理完左子树了，但还需告诉右子树，中序遍历需遍历到parent树的节点值为止（因为前序遍历，所以已经拿到了parent节点值了）
    node.right = buildTree(preorder, inorder, latest)
    return node
  }
  return null
};