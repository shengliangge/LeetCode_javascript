package cn.likou;

public class Solution0704_1 {
    public static int subtractProductAndSum(int n) {
       int add=0,mul=1;
       while(n>0){
           int num=n%10;
           n/=10;
           add+=num;
           mul*=num;
       }
        return mul-add;
    }

    public static void main(String[] args) {
        int n = 234;
        int i = subtractProductAndSum(n);
        System.out.println(i);

    }
}
