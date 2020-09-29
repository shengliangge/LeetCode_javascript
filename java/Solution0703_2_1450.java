package cn.likou;

public class Solution0703_2_1450 {
    public static int busyStudent(int[] startTime, int[] endTime, int queryTime) {
        int count=0;
        for(int i=0;i<startTime.length;i++){
            if(startTime[i]>queryTime||endTime[i]<queryTime){
                continue;
            }
            if(startTime[i]<=queryTime&&endTime[i]>=queryTime){
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int startTime[] = {1, 2, 3}, endTime[] = {3, 2, 7}, queryTime = 4;
        int i = busyStudent(startTime, endTime, queryTime);
        System.out.println(i);
    }
}
