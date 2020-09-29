package cn.likou;


import java.util.ArrayList;

public class Solution0704_9_1290 {
    public static int getDecimalValue(ListNode head) {
        ListNode temp = head;
        int result = 0;
        while (temp != null) {
            result = result * 2 + temp.val;
            temp = temp.next;
        }
        return result;
    }

    public static void main(String[] args) {
//        ListNode listNode = new ListNode();
    }
}

