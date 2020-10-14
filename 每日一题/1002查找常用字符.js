// https://leetcode-cn.com/problems/find-common-characters/
// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

// 你可以按任意顺序返回答案。
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  if (A.length <= 1) {
    return []
  }
  let resStr = A[0]
  for (let i = 1; i < A.length; i++) {
    res = resStr.split("")
    resStr=""
    for (let j = 0; j < A[i].length; j++) {
      let index = res.indexOf(A[i][j])
      if (index !== -1) {  
        resStr+= res.splice(index, 1)
      }
    }
  }
  return resStr.split("")
};
console.log(commonChars(["cool","lock","cook"]));

