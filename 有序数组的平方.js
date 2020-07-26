// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  for (let i=0;i<A.length;i++){
    A[i]=Math.pow(A[i],2)
  }
return A.sort((a,b)=>{return a-b})
};
let arr = [-4, -1, 0, 3, 10]
console.log(sortedSquares(arr))