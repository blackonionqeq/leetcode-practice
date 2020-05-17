/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/**
 * 解决对称二叉树问题是顺带把这个问题解决了
 * 简单粗暴直接翻转
 */
var invertTree = function(root) {
  if (!root) return root
  let tmp = root.left
  root.left = root.right
  root.right = tmp
  invertTree(root.left)
  invertTree(root.right)
  return root
};

/** 由于上个方法太强硬，不管空没空都递归，导致速度慢，可以稍微优化下，可以不递归的就直接判断了
 * 这是方法二
 * ps.注意递归各分支要返回一样格式的内容
 */
var invertTree = function(root) {
  if (!root) return root
  if (root.left) {
    if (!root.right) {
      root.right = root.left
      root.left = null
      invertTree(root.right)
      return root
    }
  }
  if (root.right) {
    if (!root.left) {
      root.left = root.right
      root.right = null
      invertTree(root.left)
      return root
    }
  }
  if (!root.left && !root.right) return root
  let tmp = root.left
  root.left = root.right
  root.right = tmp
  invertTree(root.left)
  invertTree(root.right)
  return root
};