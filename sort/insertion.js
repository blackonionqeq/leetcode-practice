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
 * @returns {number[]}
 */
function insertionSort(list) {
  if (list.length <= 1) return list
  for (let i = 1; i < list.length; i++) {
    const target = list[i]
    let j = i - 1
    for (; j > -1; j--) {
      if (list[j] < target) list[j+1] = list[j]
      else break
    }
    list[j+1] = target
  }
  return list
}

function insertionSortLT(list) {
  if (list.length <= 1) return list
  for (let i = 1; i < list.length; i++) {
    const target = list[i]
    let j = i - 1
    for (; j > -1; j--) {
      if (list[j] > target) list[j+1] = list[j]
      else break
    }
    list[j+1] = target
  }
  return list
}

console.log(insertionSort([12,34,124,51234,15]))
console.log(insertionSortLT([12,34,124,51234,15]))