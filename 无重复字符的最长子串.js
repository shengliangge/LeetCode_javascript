// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 1) {
    return 1
  }
  let len = 0, res = [], maxlen = 0
  for (let i = 0, j = 0; i < s.length; i++) {
    if (res.indexOf(s[i]) === -1) {
      res.push(s[i])
      len++
    } else {
      maxlen = len > maxlen ? len : maxlen
      i = j++;
      len = 0;
      res = []
    }
  }
  return maxlen = len > maxlen ? len : maxlen
};
console.log(lengthOfLongestSubstring("aadfadf"));

