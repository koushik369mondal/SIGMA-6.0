import java.util.*;

class LivePractice {

    static int binaryToDecimal(int n) {
        int mul = 1;
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum = sum + digit * mul;
            n = n / 10;
            mul = mul * 2;
        }
        return sum;
    }

    public static void main(String[] args) {
        int result1 = binaryToDecimal(101);
        System.out.println("101 : " + result1);

        int result2 = binaryToDecimal(111);
        System.out.println("111 : " + result2);

        int result3 = binaryToDecimal(1000);
        System.out.println("1000 : " + result3);
    }
}
