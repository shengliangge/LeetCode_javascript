package cn.likou;
/*在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 返回可以通过分割得到的平衡字符串的最大数量。*/

public class Solution0709_2_1221 {
    public static int balancedStringSplit(String s) {
        int count = 0,step = 0;
        for (char c : s.toCharArray()) {
            if (c == 'R') step++;
            else if(c=='L') step--;
            if(step==0) count++;
        }
        return count;
    }

    public static void main(String[] args) {
        String s = "RLLLLRRRLR";
        int i = balancedStringSplit(s);
        System.out.println(i);
    }
}



