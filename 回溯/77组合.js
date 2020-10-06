// https://leetcode-cn.com/problems/combinations/
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = []
  let nums = new Array(n).fill(null).map((num, i) => i + 1)
  function backtrack(tmpPath = [], start) {
    // console.log(tmpPath);
    if (tmpPath.length === k) {
      result.push(tmpPath.slice(0));
      return;
    }
    for (let i = start; i < nums.length; i++) {
      let num = nums[i];
      tmpPath.push(num);
      console.log(i,tmpPath);
      backtrack(tmpPath, i + 1);
      tmpPath.pop();
    }
  }
  backtrack([],0);
  return result;
};
console.log(combine(4, 2))