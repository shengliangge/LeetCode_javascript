package cn.likou;

public class Solution0711_1_1309 {
    public static String freqAlphabets(String s) {
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while (i < s.length()) {
            if (i < s.length() - 2 && s.charAt(i + 2) == '#') {
                sb.append((char) ('a' + Integer.parseInt(s.substring(i, i + 2)) - 1));
                i += 3;
            } else {
                sb.append((char) ('a' + Integer.parseInt(s.substring(i, i + 1)) - 1));
                i++;
            }
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        String s = "10#11#12";
        String s1 = freqAlphabets(s);
        System.out.println(s1);

    }
}
