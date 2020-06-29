

/**
 * 
 * @param {number[]} list 
 * @returns {number[]}
 */
function mergeSort(list) {
  if (list.length <= 1) return list
  else {
    let c = list.length / 2

    let left = mergeSort(list.slice(0, c))
    let right = mergeSort(list.slice(c))

    const result = []
    let i = j = 0
    for (; i < left.length && j < right.length;) {
      if (left[i] <= right[j]) result.push(left[i++])
      else result.push(right[j++])
    }
    if (i < left.length) result.push(...left.slice(i))
    if (j < right.length) result.push(...right.slice(j))
    return result
  }
  return list
}

/**
 * 
 * @param {number[]} list 
 * @returns {number[]}
 */
function  mergeSortGT(list) {
  if (list.length <= 1) return list
  else {
    let c = list.length / 2

    let left = mergeSortGT(list.slice(0, c))
    let right = mergeSortGT(list.slice(c))

    const result = []
    let i = j = 0
    for (; i < left.length && j < right.length;) {
      if (left[i] >= right[j]) result.push(left[i++])
      else result.push(right[j++])
    }
    if (i < left.length) result.push(...left.slice(i))
    if (j < right.length) result.push(...right.slice(j))
    return result
  }
  return list
}


console.log(mergeSort([12,34,124,51234,15]))
console.log(mergeSortGT([12,34,124,51234,15]))