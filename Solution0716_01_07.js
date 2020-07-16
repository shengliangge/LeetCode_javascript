// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var s = x + "";
    var reverse_x = "";
    var flag = false;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === '-') {
            flag = true;
            break;
        }
        reverse_x += s.charAt(i);
    }
    reverse_x -= 0;
    if (flag) {
        reverse_x = -reverse_x;
    }
    if (reverse_x > (Math.pow(2, 31)) - 1 || reverse_x < (Math.pow(-2, 31))) {
        return 0;
    }
    return reverse_x;
};
var x = 1534236469;
console.log('结果' + reverse(x));
// console.log(typeof reverse(x));