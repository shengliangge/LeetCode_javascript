//不求最优，仅仅求可行解

//把求解问题分成若干个子问题

// 对每一个子问题求解，得到子问题的局部最优解

// 把子问题的局部最优解合成原来问题的一个解


// 物品  重量  价值
// 1     2     3
// 2     3     4
// 3     4     5

// 迭代整个商品，总质量小于背包的容量，装入物品
// 如果物品完整装入背包，就将其价值和重量分别计算进已装的总价值，和总质量
// 如果物品不能装入背包，就计算其能够装入的比例，计算总价值和总质量

function knapSack(capacity, values, weights) {  //
  let n = values.length,
    load = 0,    //load 已装的总质量
    i = 0,
    val = 0;    //已装的总价值
  for (i = 0; i < n && load < capacity; i++) {
    if (weights[i] <= (capacity - load)) {
      val += values[i];
      load += weights[i];
    } else {
      let r = (capacity - load) / weights[i];
      val += r * values[i];
      load += weights[i]
    }
  }
}