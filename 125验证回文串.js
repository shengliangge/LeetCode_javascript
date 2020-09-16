// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/g, '')
  console.log(s);
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else return false
  }
  return true 
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));




