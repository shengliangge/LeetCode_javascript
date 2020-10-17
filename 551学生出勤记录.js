// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

//     'A' : Absent，缺勤
//     'L' : Late，迟到
//     'P' : Present，到场

// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。

// 你需要根据这个学生的出勤记录判断他是否会被奖赏。
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let numA = 0, flagA = true, flagL = true
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'A') {
      if (++numA > 1) {
        flagA = false
      }
    }
    if (s[i] == 'L' && i > 1 && s[i - 1] == 'L' && s[i - 2] == 'L') {
      flagL = false
    }
  }
  console.log('a:', flagA);
  console.log('L:', flagL);

  return flagA && flagL
};
console.log(checkRecord("LLL"));

