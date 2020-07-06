/**
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 * @param {number} target 
 * @returns {number} success
 */
function bsearch(arr, left = 0, right = arr.length - 1, target) {
  while (left <= right) {
    let mid = left + ((right - left)>>1)
    if (arr[mid] === target) {
      return 1
    } else if (arr[mid] > target) {
      right = target - 1
    } else {
      left = target + 1
    }
  }
  return -1
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 * @param {number} target 
 * @returns {number} success
 */
function recursiveBSearch(arr, left = 0, right = arr.length - 1, target) {
  if (left <= right) {
    let mid = left + ((right - left)>>1)
    if (arr[mid] === target) return 1
    else if (arr[mid] > target) return recursiveBSearch(arr, left, mid - 1, target)
    else return recursiveBSearch(arr, mid + 1, right, target)
  }
  return -1
}