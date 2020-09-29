package cn.likou;

public class Solution0703_4 {
    public static int minCount(int[] coins) {
        int count=0;
        for(int i=0;i<coins.length;i++){
            count+=coins[i]%2==0?coins[i]/2:coins[i]/2+1;
        }
        return count;
    }

    public static void main(String[] args) {
        int arr[] = {2,3,10};
        int i = minCount(arr);
        System.out.println(i);
    }
}
