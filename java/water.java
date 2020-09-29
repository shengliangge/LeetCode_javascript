package cn.likou;

public class water {
    public static int[] runningSum(int[] nums) {
        int runingSum[]=new int[nums.length];
        if(nums.length<=0){
            return runingSum;
        }
        runingSum[0]=nums[0];
        for(int i=1;i<nums.length;i++){
            runingSum[i]=runingSum[i-1]+nums[i];
        }
        return runingSum;
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4};
        int[] ints = runningSum(arr);
        for (int anInt : ints) {
            System.out.println(anInt);
        }
    }
}
