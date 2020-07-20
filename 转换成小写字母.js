// 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
/**
 * @param {string} str
 * @return {string}
 */
// 大写字母：65-90
// 小写字母：97-122
var toLowerCase = function(str) {
    var temp;
    var newstr = "";
    for (let i = 0; i < str.length; i++) {
        temp = str[i];
        if (temp.charCodeAt() <= 90 && temp.charCodeAt() >= 65) {
            newstr += String.fromCharCode(str[i].charCodeAt() + 32)
            continue;
        }
        newstr += str[i]
    }
    return newstr;
};

let s = "LOVELY";
console.log(toLowerCase(s));