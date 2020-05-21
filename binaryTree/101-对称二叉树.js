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
/**
 * 思路二：广度优先遍历
 * 先广度优先遍历，然后对每行的结果进行检测是否对称
 * 虽然做出来了，但效率奇低ORZ
 */
var levelOrder = function(root = null, result = [], layer = 0, count = 0) {
  if (!root) {
    return result
  }
  if (!result[layer]) {
    result[layer] = []
  }
  result[layer][count] = root.val
  
  levelOrder(root.left, result, layer+1, count * 2)
  levelOrder(root.right, result, layer+1, count * 2 + 1)
  return result
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  else if (root.left && !root.right) {
    return false
  } else if (!root.left && root.right) {
    return false
  } else {
    const res = levelOrder(root)
    for(let i = 1, count = 2; i < res.length; i++, count*=2) {
      for(let j = 0; j < count/2; j++) {
        if (res[i][j] !== res[i][count -1 - j]) {
          return false
        }
      }
    }
    return true
  }
};
/**
 * 思路三：最小元递归
 * 前序遍历改良版
 * 一棵二叉树的最小元是数值+左右子树。以这个单位进行递归。
 * 效率最高的解法，大佬的答案
 */
const help = function (left, right) {
  if (left  === null && right ===null) {
      return true;
  }

  if (left === null || right === null) {
      return false
  }

  return left.val === right.val && help(left.left, right.right) && help(right.left, left.right)
}
var isSymmetric = function(root) {
 if (root === null) {
     return true;
 }

 return help(root.left, root.right )

};
/**
 * 思路四： 非递归方法
 * 手动实现堆栈，模拟递归过程
 * 效率似乎并不好
 * 思考方式是思考递归的话，下层会怎么执行，什么时候到底反弹，我也做类似的事情就可以了
 * 虽然代码不多但想了我好一段事件
 */
var isSymmetric = function(root) {
  if (!root) return true
  let wait = [[root.left, root.right]]
  while (wait.length) {
    console.log(wait)
    const [left, right] = wait.pop()
    if (left && !right || !left && right) return false
    if (left === right && !left) continue
    if (left.val !== right.val) return false
    wait.push([left.right, right.left], [left.left, right.right])
  }
  return true
};