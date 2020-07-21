// 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。

// 题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站。

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    var after = [];
    for (let i = 0; i < paths.length; i++) {
        after.push(paths[i][0])
    }
    for (let i = 0; i < after.length; i++) {
        if (after.indexOf(paths[i][1]) == -1) return paths[i][1];
    }

};

var paths = [
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"]
]
console.log("结果:" + destCity(paths));