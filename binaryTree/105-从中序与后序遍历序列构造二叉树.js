/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * 解法一：遍历
 * 与其说是解法，不如说是试出来的，能过连我都觉得神奇
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder.length) return null
  let nodes = [], r, la = null
  for(let i = j = 0; j < inorder.length; j++) {
    if (nodes.length && postorder[j] === nodes[nodes.length - 1].val) {
      const root = nodes.pop()
      root.right = la
      la = root
      continue
    }
    let node = new TreeNode(inorder[i])
    if (la) {
      node.left = la
    }
    if (node.val === postorder[j]) {
      la = node
      i++
      continue
    } else {
      nodes.push(node)
      if (nodes.length === 1) r = node
      i++
    }
    while (inorder[i] !== postorder[j]) {
      const node = new TreeNode(inorder[i++])
      // if (la) {
      //   node.left = la
      // }
      nodes.push(node)
    }
    la = new TreeNode(postorder[j])
    i++
  }
  return la || r
};
/**
 * 解法二：递归
 * 通过解法一的摸索，我大致有了思路：中序和后序的共同点是先左子树，区别是中序先node后右，后序反之。所以共同的是左子树，不同时先出现的是node。知道是node后把右边找出来就形成一棵树了。还有个值得注意的点是一棵树完了未必就结束了，可能还有parent，这个要通过inorder是否为空来判断。按照这个思路，处理好边界，整理一下就可以写出来了。
 */
var buildTree = function(inorder, postorder, left = null, parentVal = null) {
  if (postorder.length && postorder[0] === parentVal) {
    postorder.shift()
    return left
  }
  if (!inorder.length) return left
  let node = new TreeNode(inorder[0])
  node.left = left
  if (inorder[0] !== postorder[0]) {
    const p = inorder.shift()
    node.right = buildTree(inorder, postorder, null, p)
  } else {
    inorder.shift()
    postorder.shift()
  }
  if (inorder.length) return buildTree(inorder, postorder, node, parentVal)
  return node
};