// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
return addStack(S)==addStack(T)
};
var addStack = function (str) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '#') {
      stack.push(str[i])
    } else {
      stack.pop()
    }
  }
  return stack.toString()
}

console.log(backspaceCompare(S = "a##c", T = "#a#c"));
