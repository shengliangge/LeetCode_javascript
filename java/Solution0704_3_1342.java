package cn.likou;

public class Solution0704_3_1342 {
    public static int numberOfSteps(int num) {
        int count=0;
        while(num!=0){
           num=num%2==0?num/2:num-1;
           count++;
        }
        return count;
    }

    public static void main(String[] args) {
        int num = 8;
        int i = numberOfSteps(num);
        System.out.println(i);
    }
}
