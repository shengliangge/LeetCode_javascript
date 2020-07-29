// 猜数字游戏的规则如下：

//     每轮游戏，系统都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。
//     如果你猜错了，系统会告诉你这个数字比系统选出的数字是大了还是小了。

// 你可以通过调用一个预先定义好的接口 guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：
/** 
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let guessNumber = parseInt(n / 2)
  console.log(guessNumber)
  let flag = guess(guessNumber)
  console.log(flag)
  while (flag != 0) {
    if (flag === 1) {
      guessNumber = parseInt((guessNumber) / 2)
    } else if (flag === -1) {

      guessNumber = parseInt((n + guessNumber) / 2)
      console.log(guessNumber)
    }
    flag = guess(guessNumber)
  }
  return guessNumber
};
function guess(key) {
  if (key > 6)
    return 1
  if (key < 6)
    return -1
  if (key == 6)
    return 0
}
console.log(guessNumber(10))