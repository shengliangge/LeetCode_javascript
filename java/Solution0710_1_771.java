package cn.likou;
//给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
//J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

public class Solution0710_1_771 {
    public static int numJewelsInStones(String J, String S) {
        int count = 0;
        for (int i = 0; i < S.length(); i++)
            if (J.contains(S.substring(i, i + 1)))
                count++;
        return count;
    }

    public static void main(String[] args) {
        String J = "z";
        String S = "ZZ";
        int i = numJewelsInStones(J, S);
        System.out.println(i);
    }
}
