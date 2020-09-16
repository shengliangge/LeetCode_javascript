// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = "", str = ""
  if (s.length == 1) return s
  for (let i = 0; i < s.length - 1; i++) {
    len = ""
    for (let j = i; j < s.length; j++) {
      len += s[j]
      let bre = 0, aft = len.length - 1, flag = true
      if(s[j])
      while (bre <= aft) {
        if (len[bre] == len[aft]) {
          bre++
          aft--
        } else {
          flag = false
          break
        }
      }
      if (flag && len.length > str.length) {
        str = len
      }
    }
  }
  return str
};
console.log(longestPalindrome("a"));

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   let len = [],str = []
//   for (let i = 0; i < s.length; i++) {
//     len = []
//     for (let j = i; j < s.length; j++) { 
//       len.push(s[j])
//       // console.log('j中的len', len);
//       let bre = 0, aft = len.length - 1, flag = true
//       while (bre <= aft) {
//         // console.log(len);
//         // console.log(len[bre],bre);
//         // console.log(len[aft],aft);
//         // console.log('-----------------');
//         if (len[bre] == len[aft]) {
//           bre++
//           aft--
//         } else {
//           flag = false
//           console.log('结束',flag);
//           break
//         }
//       }
//       if (flag&&len.length>str.length) {
//         console.log('zhixing');
//         str = len
//         console.log("回文串", str);
//       }
//       console.log(str);

//     }
//   }
//   return str
// };
// console.log(longestPalindrome("babad"));
// 