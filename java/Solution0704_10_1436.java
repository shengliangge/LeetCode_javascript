package cn.likou;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class Solution0704_10_1436 {
    public static String destCity(List<List<String>> paths) {
//        Stack<String> city = new Stack<String>;
//     fore
        return "";
    }

    public static void main(String[] args) {
        List<List<String>> paths = new ArrayList<List<String>>();
        List<String> list1 = new ArrayList<String>();
        List<String> list2 = new ArrayList<String>();
        List<String> list3 = new ArrayList<String>();
        list1.add("B");
        list1.add("C");
        list2.add("D");
        list2.add("B");
        list3.add("C");
        list3.add("A");
        paths.add(list1);
        paths.add(list2);
        paths.add(list3);
        String s = destCity(paths);
        System.out.println(s);
    }
}
