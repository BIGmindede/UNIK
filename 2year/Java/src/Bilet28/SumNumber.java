package Bilet28;

public class SumNumber {
    public static int sum(int num){
        if (num==0)
            return 0;
        else
            return num%10 + sum(num/10);
    }

    public static void main(String[] args) {
        int a = 108760;
        System.out.println(sum(a));
    }
}
