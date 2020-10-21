// 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

// 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  if (typed.length < name) return false
  let j = 0
  for (let i = 0; i < typed.length; i++) {
    if (name[j] == typed[i]) {
      j++
    } else if (typed[i] !== name[j - 1]) {
      return false
    }

  }
 return j == name.length
};

console.log(isLongPressedName(name = "saeedd", typed = "ssaaeedd"));
