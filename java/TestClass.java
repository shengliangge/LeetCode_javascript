package cn.likou;

import com.sun.media.sound.SoftTuning;

public class TestClass {
    public static int maxScoreSightseeingPair(int[] A) {
        int resultMax = 0;       //记录结果
        int current = A[0] + 0;  //记录当前A[i]+i
        for (int j = 1; j < A.length; ++j) {
            resultMax = Math.max(resultMax, current + A[j] - j);
            current=Math.max(current,A[j]+j);
        }
        return resultMax;  //返回最大结果
    }

    public static void main(String[] args) {
        int[] arr = {8, 1, 5, 2, 6};
        int i = maxScoreSightseeingPair(arr);
        System.out.println(i);
    }
}
