package cn.likou;

public class Solution0703_1 {
    public static int xorOperation(int n, int start) {
        int nums=start;
        for (int i=1;i<n;i++) {
            nums = nums ^ (start + 2 * i);
        }
        return nums;
    }

    public static void main(String[] args) {
        int i = xorOperation(4, 3);
        System.out.println(i);
    }
}
