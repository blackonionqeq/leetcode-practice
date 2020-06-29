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
 * @param {number[]} list
 * @return {number[]}
 */
function bubbleSort(list) {
  if (list.length <= 1) return list
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) swap(list, j, j + 1)
    }
  }
  return list
}

function bubbleSortLT(list) {
  if (list.length <= 1) return list
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] < list[j + 1]) swap(list, j, j + 1)
    }
  }
  return list
}

console.log(bubbleSort([5,4,10,2,1]))
console.log(bubbleSortLT([5,4,10,2,1]))