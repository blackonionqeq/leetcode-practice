/**
 * 思路一： 递归+增加总和默认值
 */
var hasPathSum = function(root, sum, currentSum = 0) {
  if (!root) return false
  currentSum += root.val
  if (!root.left && !root.right) {
    return currentSum === sum
  }
  // 下两个判断为冗余判断，可以合并到下方的或运算，这两个冗余运算让执行用时降低了50%~60%ORZ
  // if (!root.left) {
  //   return hasPathSum(root.right, sum, currentSum)
  // }
  // if (!root.right) {
  //   return hasPathSum(root.left, sum, currentSum)
  // }
  // 因为题目问的是是否存在，所以有一条就为真
  return hasPathSum(root.right, sum, currentSum) || hasPathSum(root.left, sum, currentSum)
};