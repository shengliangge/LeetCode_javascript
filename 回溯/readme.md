在尝试中寻找问题的解，过程中一旦发现条件不符合，就回溯返回上一层

用递归模拟出所有的情况
遇到包含重复元素的情况就回溯
收集所有能到达递归终点的情况，并返回

result = []
function backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 of 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
