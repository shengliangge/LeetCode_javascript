package cn.likou;

public class Solution0705_2_1299 {
    public static int[] replaceElements(int[] arr) {
        for(int i=0;i<arr.length;i++){
            if(i==arr.length-1){
                arr[i]=-1;
                break;
            }
            int max=arr[i+1];
            for(int j=i+2;j<arr.length;j++){
                max = max > arr[j] ? max : arr[j];
            }
            arr[i]=max;
        }
        return arr;
    }
    //他人优秀想法
    public int[] replaceElements2(int[] arr) {
        int rightMax = arr[arr.length - 1];
        arr[arr.length - 1] = -1;
        for (int i = arr.length - 2; i >= 0; i--) {
            int t = arr[i];
            arr[i] = rightMax;
            if (t > rightMax)
                rightMax = t;
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {17, 18, 5, 4, 6, 1};
        int[] ints = replaceElements(arr);
        for (int anInt : ints) {
            System.out.println(anInt);
        }
    }
}
