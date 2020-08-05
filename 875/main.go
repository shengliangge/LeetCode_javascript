package main//包声明    模块化 module
// go 是一个天生支持多核计算的云开发时代C语言
// node + go 和服务器有关
//require('fs') fileSystem
import (
	"fmt"   //向命令行输出hello world     format
	"math"
) //es6
//node 脚本语言
//go c 二进制文件
// 编译器 func=>function



func minEatingSpeed(piles []int,H int) int {
	low :=1   //let los=1
	hi:=maxPiles(piles)
	// fmt.Printf("%d",hi)
	for{
		if low>hi{
			break;
		}
		if canEatAllBanas(piles,H,low){		
			return low
		}else{
			low++
		}
	}
	return low
}

func canEatAllBanas(piles []int,H int,low int)bool{
	//定义累加时间
	timeSum := 0
	//循环获取需要的时间
	for i := 0; i < len(piles); i++ {
			// 1. range piles piles[i]/k向上取整 
			// 2.累加
		timeSum += int(math.Ceil(float64(piles[i])/float64(low)))
	}
	// fmt.Println(timeSum)	
	// 3.判断是否小于H
	if timeSum <= H {
		return true
	}
	return false
}

func maxPiles(piles []int) int{
h :=0
for _, n :=range piles{
h=max(h,n)
}
return  h
}
func max(a int ,b int)int{
if a > b {
	return a
}else{
	return b 
}
}
func main(){  // fund 函数保留字
// 从main开始
// go 是一个静态语言，有类型约束
//函数是组织代码的最小单元｛块级作用域｝
fmt.Printf("%dH小时之内吃完香蕉的最慢速度是%d只/小时",8,minEatingSpeed([]int{3,6,7,11},8));
}