// 给定两个数组，编写一个函数来计算它们的交集。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // let len = nums1.length > nums2.length ? nums2.length : nums1.length
  let res = []
  if(nums1.length<=nums2.length){
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if(!res.includes(nums1[i]))
        res.push(nums1[i])
      }
    }
  }else{
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        if(!res.includes(nums2[i]))
        res.push(nums1[i])
      }
    }
  }
 
 
  return res;
};
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2))