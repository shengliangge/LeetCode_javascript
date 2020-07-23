// 给你一个仅由数字 6 和 9 组成的正整数 num。

// 你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。

// 请返回你可以得到的最大数字。
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let numStr = num + "";
  numStr=numStr.replace('6',9)
  return +numStr;
};

let num = 9;
console.log(maximum69Number(num));
  // for (let i = 0; i < numStr.length; i++) {
  //   if (numStr[i] == 6) {
  //     break;
  //   }
  // }