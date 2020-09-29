package cn.likou;

public class Solution0706_1_1252 {

    //    public static int oddCells(int n, int m, int[][] indices) {
//        int arr[][] = new int[n][m];
//        for (int i = 0; i < indices.length; i++) {
//            for (int j = 0; j < 2; j++) {
//                int temp = indices[i][j];
//                if (j == 0) {
//                    for (int k = 0; k < m; k++) {
//                        arr[temp][k]++;
//                    }
//                }
//                if (j == 1) {
//                    for (int k = 0; k < n; k++) {
//                        arr[k][temp]++;
//                    }
//                }
//            }
//        }
//        int count=0;
//        for (int[] ints : arr) {
//            for (int anInt : ints) {
//                if(anInt%2==1)
//                    count++;
//            }
//        }
//        return count;
//    }
    public static int oddCells(int n, int m, int[][] indices) {
        int arr[][] = new int[n][m];
        for (int i = 0; i < indices.length; i++) {
            int temp1 = indices[i][0];
            int temp2 = indices[i][1];
            for (int k = 0; k < m; k++) {
                arr[temp1][k]++;
            }
            for (int k = 0; k < n; k++) {
                arr[k][temp2]++;
            }
        }
        int count = 0;
        for (int[] ints : arr) {
            for (int anInt : ints) {
                if (anInt % 2 == 1)
                    count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int n = 2, m = 3;
        int indices[][] = {{0, 1}, {1, 1}};
        int i = oddCells(n, m, indices);
        System.out.println(i);
    }
}
