/**
 * @param {number[]} nums
 * @return {number}
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

 */
var arrayPairSum = function(nums) {
    //思路：由于题目给的数组长度为偶数，所以可以排除极端情况，
    //在这样下，分组最小和则为排序后的奇数项
    nums.sort((a, b) => a - b); //a-b返回从小到大排序
    var sum = 0;
    for (var i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};

var n = [1, 4, 3, 2];
var sum = arrayPairSum(n);
console.log(sum);