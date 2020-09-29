package cn.likou;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class Solution0712_1_728 {
    public static List<Integer> selfDividingNumbers(int left, int right) {
        int temp = 0,temp2=0;
        boolean flag = true;
        List<Integer> arrayList = new ArrayList<>();
        for (int i = left; i <= right; i++) {
            flag = true;
            temp = i;
            while (temp >= 1) {
                temp2=temp%10;
                if (temp2 == 0 || i % temp2 != 0) {
                    flag = false;
                    break;
                }
                temp /= 10;
            }
            if (flag)
                arrayList.add(i);
        }
        return arrayList;
    }

    public static void main(String[] args) {
        int left = 1, right = 22;
        List<Integer> integers = selfDividingNumbers(left, right);
        for (Integer integer : integers) {
            System.out.println(integer + " ");
        }
    }
}
