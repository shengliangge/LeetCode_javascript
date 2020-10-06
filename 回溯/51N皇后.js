var solveNQueens = function (n) {
  let result = []
  function backtrack(temPath = []) {
    for (let col = 0; col < n; col++) {
      // 不能选的位置过滤掉
      // 对角线(x, y)是(1, 1) temPath(row, col)[0](0, 0)
      // 1-0===1-0=>row-x===col-y  0-1===0-1
      let flag = tmpPath.some((colIndex, rowIndex) => {
        return rowIndex - tmpPath.length === colIndex - col ||
          Math.abs(rowIndex - temPath.length) === Math.abs(colIndex - col) ||
          colIndex === col
      })
      // 如果在tmpPath(已经选过的皇后位置里面)找到满足上面这个公式的
      //说明这列不能选
      if (flag) continue
      tmpPath.push(col);
      backtrack(tmpPath)
    }
  }
  return result
  console.log(solveNQueens());
  
}