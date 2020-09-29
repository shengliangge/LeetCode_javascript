package cn.likou;

public class Solution0704_5_1313 {
    public static int[] decompressRLElist(int[] nums) {
        if(nums.length<=1){
            return null;
        }
        int length=0;
        for(int i=0;i<nums.length;i+=2){
            length+=nums[i];
        }
        int[] arr=new int[length];
        for(int i=0,j=0;i<nums.length;i+=2){
            for(int k=0;k<nums[i];k++){
                arr[j++]=nums[i+1];
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int nums[] = {1, 2, 3, 4};
        int[] ints = decompressRLElist(nums);
        for (int anInt : ints) {
            System.out.println(anInt);
        }
    }
}
