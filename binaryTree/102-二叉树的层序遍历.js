/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * 思路：
 * 1.哪种遍历方式？前序遍历（返回值是二层数组，要写第二层，最好前面垫一层）
 * 确定后把前序遍历的模板套上来
 * 递归函数里：
 * doSomething
 * 左子树递归
 * 右子树递归
 * 2.doSomething里干啥？
 * 把当前值扔进当前层的数组结果里。
 * 两点，一点是当前层没东西得创建数组再push，一点是涉及到层了，需要个新参数，可以定义默认值在参数列表里
 * 还有点是需要返回值，返回值的默认值也放参数里。
 * 注意，由递归的原则之一的返回一致原则，所有递归函数内的返回的类型必须一致。
 * 3.审视
 * 例子中为空时没有放进来，可以得知为空不用push。至此完成全部设计。
 */
function createArrayOrPushElement2Array(arr, layer, el) {
  if (!arr[layer]) {
    arr[layer] = [el]
    return
  }
  arr[layer].push(el)
  return
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root = null, result = [], layer = 0) {
  if (!root) {
    return result
  }
  createArrayOrPushElement2Array(result, layer, root.val)
  
  if (root.left) levelOrder(root.left, result, layer+1)
  if (root.right) levelOrder(root.right, result, layer+1)
  return result
};