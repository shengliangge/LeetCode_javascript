// https://leetcode-cn.com/problems/subsets/
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  function backtrack(start,tmpPath) {
    result.push(tmpPath.slice(0));
    for (let i = start; i < nums.length; i++) {
      let num=nums[i];
      tmpPath.push(num)
      backtrack(i + 1,tmpPath);
      tmpPath.pop()
    }
  }
  backtrack(0,[])
  return result;
};
console.log(subsets([1,2,3]));
