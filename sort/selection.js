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
function selectionSort(list) {
  if (list.length <= 1) return list
  for (let i = 0; i < list.length; i++) {
    let min = i
    for (let j = i; j < list.length; j++) {
      if (list[j] < list[min]) min = j
    }
    swap(list, i, min)
  }
  return list
}

function selectionSortGT(list) {
  if (list.length <= 1) return list
  for (let i = 0; i < list.length; i++) {
    let min = i
    for (let j = i; j < list.length; j++) {
      if (list[j] > list[min]) min = j
    }
    swap(list, i, min)
  }
  return list
}

console.log(selectionSort([12,34,124,51234,15]))
console.log(selectionSortGT([12,34,124,51234,15]))