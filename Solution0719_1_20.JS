// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    if (s.length == 0) {
        return true;
    }
    if (s.length == 1) return false;
    for (var i = 0; i < s.length; i++) {
        // console.log(s[i])
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        } else {
            if (stack.length < 1) {
                return false;
            }
            if (s[i] == ")") {
                if (stack[stack.length - 1] == "(")
                    stack.pop();
                else
                    return false
            }
            if (s[i] == "}") {
                if (stack[stack.length - 1] == "{")
                    stack.pop();
                else
                    return false
            }
            if (s[i] == "]") {
                if (stack[stack.length - 1] == "[")
                    stack.pop();
                else
                    return false
            }

        }
        console.log(stack)
    }
    // return stack.length == 0;
    return stack == 0;
};
var s = "{[]}";
console.log(isValid(s));