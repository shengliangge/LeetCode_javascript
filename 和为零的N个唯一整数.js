// 给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let arr = []
  if (n % 2 == 0) {//偶数
    for (let i = 0, j = 1; i < n; i++) {
      if (i % 2 == 0) {
        arr.push(j)
      } else {
        arr.push(-j)
        j++
      }
    }
  } else {

    for (let i = 0, j = 1; i < n - 1; i++) {
      if (i % 2 == 0) {
        arr.push(j)
      } else {
        arr.push(-j)
        j++
      }
    }
    arr.push(0)
  }

  return arr

};

console.log(sumZero(4));