package cn.likou;

public class Solution0704_6_1295 {
    public static int findNumbers(int[] nums) {
        int num=0;
        for(int i=0;i<nums.length;i++){
            int count=0;
            while(nums[i]!=0){
                nums[i]/=10;
                count++;
            }
            if(count%2==0)num++;
        }
        return num;
    }
    public static void main(String[] args) {
        int nums[]={555,901,482,1771};
        int numbers = findNumbers(nums);
        System.out.println(numbers);
    }
}
