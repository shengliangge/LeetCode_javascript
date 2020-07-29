/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let res = "";
  for (let i = 0; i < n - 1; i++)
    res += 'a';
    return n%2==0?res+'b':res+'a';
  };

  console.log(generateTheString(4));