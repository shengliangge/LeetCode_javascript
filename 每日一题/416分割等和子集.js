// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 注意:

//     每个数组中的元素不会超过 100
//     数组的大小不会超过 200
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let left = [], right = []  //定义左右子集
  for (let i = 0; i < nums.length; i++) {

    for (let j = 0; j <= i; j++) {
      left.push(nums[j])
    }
    console.log('左边', left);

    for (let k = i + 1; k < nums.length; k++) {
      right.push(nums[k])
    }
    console.log('右边', right);
    let leftSum = left.reduce((x, y) => x + y,0)
    let rightSum = right.reduce((x, y) => x + y,0)
    console.log(leftSum);
    console.log(rightSum);
    if (leftSum === rightSum) return true
    left = []
    right = []
  }
  return false
};

console.log(canPartition([1,5,11,5 ]));
