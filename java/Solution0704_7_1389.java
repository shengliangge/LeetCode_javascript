package cn.likou;


import java.util.ArrayList;

public class Solution0704_7_1389 {
    public static int[] createTargetArray(int[] nums, int[] index) {
        int traget[] = new int[index.length];
        for (int i = 0; i < traget.length; i++) traget[i] = -1;
        for (int i = 0; i < index.length; i++) {
            if (traget[index[i]] == -1) {
                traget[index[i]] = nums[i];
            } else {
                for (int j = traget.length - 1; j > index[i]; j--)traget[j] = traget[j - 1];//后移
                traget[index[i]] = nums[i];
            }
        }
        return traget;
    }
    //优化版：方法二
    public static int[] createTargetArray2(int[] nums, int[] index) {
        int traget[]=new int[index.length];
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i=0;i<index.length;i++) arr.add(index[i],nums[i]);
        for(int i=0;i<arr.size();i++) traget[i]=arr.get(i);
        return traget;
    }
    public static void main(String[] args) {
        int nums[] = {1, 2, 3, 4, 0}, index[] = {0, 1, 2, 3, 0};
        int[] target = createTargetArray2(nums, index);
        for (int i : target) {
            System.out.println(i);
        }
    }
}
