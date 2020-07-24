// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ")
  let str = ""
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      str += arr[i][j]
    }
    if(i==arr.length-1){
      break
    }
    str+=" "
  }
  console.log(str)
  return str
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s))
