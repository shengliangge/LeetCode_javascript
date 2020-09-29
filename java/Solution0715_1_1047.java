package cn.likou;

import java.util.Stack;

/*
给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 */
public class Solution0715_1_1047 {
    public static String removeDuplicates(String S) {
        Stack<Character> stack = new Stack<Character>();
        for (Character s_char : S.toCharArray()) {
        if(!stack.empty()){
           if(stack.peek()==s_char){
               stack.pop();
               continue;
           }
        }
            stack.push(s_char);
        }
        String str="";
        StringBuffer sb = new StringBuffer(str);
        while (!stack.empty()){
            sb.append(stack.pop());
        }
        return sb.reverse().toString();
    }

    public static void main(String[] args) {
        String s = "abbaca";
        String s1 = removeDuplicates(s);
        System.out.println(s1);
    }
}
