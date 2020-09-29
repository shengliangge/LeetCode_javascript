package cn.likou;

public class Solution0704_2_1464 {
    public static int maxProduct(int[] nums) {
        int max1=nums[0];
        int max2=0;
        int num=0;
        for(int i=1;i<nums.length;i++){
            if(max1<nums[i]){
                max1=nums[i];
                num=i;
            }
        }
        for(int i=0;i<nums.length;i++){
            if(i==num){
                continue;
            }
            max2=nums[i]>max2?nums[i]:max2;
        }
        return (max1-1)*(max2-1);
    }

    public static void main(String[] args) {
        int nums[]={10,2,5,2};
        int i = maxProduct(nums);
        System.out.println(i);
    }
}
