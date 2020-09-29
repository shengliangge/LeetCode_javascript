package cn.likou;

public class Solution0707_1_1475 {
    public static int[] finalPrices(int[] prices) {

        for (int i = 0; i < prices.length - 1; i++) {
            int min=prices[i];
            int index=i;
            for(int j=i+1;j<prices.length;j++){
                if(min>=prices[j]){
                    min = prices[j];
                    index=j;
                }
                if(index!=i){
                    break;
                }
            }
            if (index!=i)
                prices[i] -= prices[index];
        }
        return prices;
    }

    public static void main(String[] args) {
        int prices[] = {1,2,3,4,5};
        int[] ints = finalPrices(prices);
        for (int anInt : ints) {
            System.out.println(anInt);
        }
    }
}
