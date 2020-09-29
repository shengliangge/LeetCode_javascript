package cn.likou;

public class Solution0704_4_1108 {
    public static String defangIPaddr(String address) {
        return address.replace(".", "[.]");

    }

    public static void main(String[] args) {
        String address = "1.1.1.1";
        String s = defangIPaddr(address);
        System.out.println(s);
    }
}
