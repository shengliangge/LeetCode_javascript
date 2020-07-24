// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let bef = 0, aft = s.length - 1;
  let temp=0;
  for (let i = 0; i < (s.length - 1)/2; i++) {
    temp=s[i]
    s[i]=s[aft]
    s[aft]=temp
    bef++
    aft--
  }
  return s
};
let char = ["H","a","n","n","a","h"]
console.log(reverseString(char))