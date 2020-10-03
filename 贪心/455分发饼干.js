// https://leetcode-cn.com/problems/assign-cookies/
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。
// 但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，
// 这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。
// 如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 注意：

// 你可以假设胃口值为正。
// 一个小朋友最多只能拥有一块饼干。

// 既能满足孩子，还能消耗最小，较小的饼干分配给胃口较小的孩子
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => {
    return a - b
  })
  s.sort((a, b) => {
    return a - b
  })
  let total = 0
  for (let i = 0; i < s.length; i++) {
    if (g[total] <= s[i]) {
      total++
    }
    if(total===g.length){
        return total
    }
  }
  return total
};