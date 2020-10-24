// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  console.log('位置', findLastIndex('a', S))
  let arr=[]
  for (let i = 0; i < S.length; i++) {

  }
};
function findLastIndex(findStr, S) {
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] == findStr) return i
  }
}
console.log(partitionLabels(S = "ababcbacadefegdehijhklij"))