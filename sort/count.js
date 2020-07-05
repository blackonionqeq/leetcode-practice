/**
 * 
 * @param {number[]} arr 
 */
function countSort(arr) {
  if (arr.length <= 1) return
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]
  }
  /**
   * @type {number[]} tmp1
   */
  const tmp1 = new Array(max + 1)
  arr.forEach(item => {
    if (!tmp1[item]) tmp1[item] = 1
    else tmp1[item]++
  })
  console.log('tmp1: ', tmp1)

  /** @type {number[]} tmp2 */
  const tmp2 = new Array(max + 1)
  tmp2[0] = tmp1[0]
  for (let i = 1; i < tmp1.length; i++) {
    tmp2[i] = tmp2[i - 1] + tmp1[i] || 0
  }
  console.log('tmp2: ', tmp2)

  /** @type {number[]} res */
  const res = new Array(arr.length)
  for (let i = arr.length - 1; i > -1; i--) {
    let index = tmp2[arr[i]] - 1
    res[index] = arr[i]
    tmp2[arr[i]]--
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = res[i]
  }
  // tmp1.reduce((calculator, current, index) =>  ,0)
}

const a = []
for (let i = 0; i < 50; i++) a.push(Math.floor(Math.random() * 10))
console.log('before sort:', a)
countSort(a)
console.log('after sort:', a)