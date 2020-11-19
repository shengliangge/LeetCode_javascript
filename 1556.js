var thousandSeparator = function (n) {
  let numStr = n + ""
  let len = numStr.length, res = ""
  if (len <= 3) return n + ""
  for (let i = len - 1, j = 1; i >= 0; i-- , j++) {
      res += numStr[i]
      if (j % 3 == 0 && j != len) {
          console.log('j', j)
          console.log(numStr[i])
          res += "."
      }
  }
  return res.split('').reverse().join('')
};