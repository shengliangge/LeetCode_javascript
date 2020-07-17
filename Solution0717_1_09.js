// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 额外要求，不将整数转化成字符串解决问题
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x - 0 < 0) {
        return false;
    }
    var num = []; //使用一个数组存放分解的整数
    var temp; //用来装取每个被分解的数
    var flag = true; //定义一个flag标志
    while (x > 0) {
        temp = x % 10; //取到个位数
        x = Math.floor(x / 10); //x自除10
        num.push(temp);
    }
    for (var i = 0, j = num.length - 1; i < num.length / 2; i++, j--) {
        console.log(i)
        console.log(j)
        console.log("i:" + num[i]);
        console.log("j:" + num[j]);
        if (num[i] != num[j]) {
            flag = false;
            break;
        }
    }
    return flag;
};
var x = 123454321;
console.log(isPalindrome(x));