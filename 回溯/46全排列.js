// 给定一个 没有重复 数字的序列，返回其所有可能的全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function () {
 let nums= [ '(','(','z' ]
  const res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach(n => {
      if (path.includes(n)) {
        return
      }
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
};
console.log(permute());
