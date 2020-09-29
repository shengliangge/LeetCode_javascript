package cn.likou;

public class Solution0703_3 {
    public static int[] smallerNumbersThanCurrent(int[] nums) {
       int arr[]=new int[nums.length];
        for(int i=0;i<nums.length;i++){
            int count=0;
            for(int j=0;j<nums.length;j++){
                if(i==j){
                    continue;
                }
                if(nums[i]>nums[j]){
                    count++;
                }
            }
            arr[i]=count;
        }
        return arr;
    }

    public static void main(String[] args) {
        int nums[]={8,1,2,2,3};
        int[] ints = smallerNumbersThanCurrent(nums);
        for (int anInt : ints) {
            System.out.println(anInt);
        }
    }
}
