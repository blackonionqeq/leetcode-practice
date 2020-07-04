/**
 * 
 * @param {number[]} list
 * @param {number} a 
 * @param {number} b 
 */
function swap (list, a, b) {
  // console.log('before swap:', a, b, list)
  let t = list[a]
  list[a] = list[b]
  list[b] = t
  // console.log('after swap:', a, b, list)
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 * @returns {number} pivot
 */
function partiation(arr, left, right) {
  const pivot = arr[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right <= left) return
  const pivot = partiation(arr, left, right)
  quickSort(arr, left, pivot - 1)
  quickSort(arr, pivot + 1, right)
}

const test = []
for (let i = 0; i < 100; i++) test.push(Math.floor(Math.random() * 1000))
console.log('before sort:', test)
quickSort(test)
console.log('after sort:', test)