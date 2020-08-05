/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
//暴力破解法 再优化
var minEatingSpeed = function (piles, H) {
  let lo = 1; //最小的数
  let hi = Math.max(...piles)  //求最大香蕉数
  if (piles.length == H) { //如果香蕉堆数量等于时间，则返回最大香蕉数
    return hi
  }
  let time = 0 //计算时间
  // 从小到大查找
  // for (let i = lo; i <= hi; i++) { //外层循环从最小吃香蕉数开始找
  //   time=0 //内循环结束后，重置时间
  //   for (let j = 0; j < piles.length; j++) { //内层循环，从香蕉堆循环
  //     time =time+ (Math.ceil(piles[j] / i)) //时间向上取整累加
  //     if (time > H) {  //如果累加的时间超过总时间，则直接结束
  //       break
  //     }
  //     if(j==piles.length-1){  //如果到循环结束都没有超时，则返回最小值
  //       return i
  //     }
  //   }
  // }

  // 第二种，二分查找法

  while (lo < hi) {
    let mid = parseInt((lo + hi) / 2) //取中间值
    if (!possible(piles, H, mid))  //如果超时
      lo = mid + 1; //最小值等于mid
    else
      hi = mid;  //如果不超时，最大值等于mid
  }
  return lo
};
function possible(piles, H, K) {
  let time = 0;
  for (p of piles)
    time += (Math.ceil(p / K))
  return time <= H;
}


console.log(minEatingSpeed([3,6,7,11],8));