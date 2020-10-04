// https://leetcode-cn.com/problems/generate-parentheses/
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let nums=[];
  for (let i = 0; i < n; i++) {
    nums.push('(')
  }
  for (let i = 0; i < n; i++) {
    nums.push(')')
  }
  console.log(nums);

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
console.log(generateParenthesis(3));

