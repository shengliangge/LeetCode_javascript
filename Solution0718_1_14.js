// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return "";
    }
    if (strs.length == 1) {
        return strs[0];
    }
    var str = ""; //用来装载公共前缀
    for (var i = 0; i < strs[0].length; i++) {
        var temp = strs[0][i]; //先将第一个字符串的第一个字母赋值给temp
        for (var j = 1; j < strs.length; j++) {
            if (temp != strs[j][i]) {
                return str;
            }
            if (j == strs.length - 1) {
                str += temp;
            }
        }
    }
    return str;
};
var s = ["flower", "flow", "floght"];
longestCommonPrefix(s);
var str = longestCommonPrefix(s);
console.log(str);