package cn.likou;

public class Solution0705_3_461 {
//    public static int hammingDistance(int x, int y) {
//        int binary = x ^ y,count=0;
//        String binaryString = Integer.toBinaryString(binary);
//        char[] chars = binaryString.toCharArray();
//        for (char aChar : chars) {
//            if(aChar=='1')
//                count++;
//        }
//        return count;
//    }
public static int hammingDistance(int x, int y) {
    int binary = x ^ y;
    String binaryString = Integer.toBinaryString(binary);
    String replace = binaryString.replaceAll("1", "");
    return binaryString.length()-replace.length();
}
    public static void main(String[] args) {
        int x = 1, y = 4;
        int i = hammingDistance(x, y);
        System.out.println(i);
    }
}
