import java.util.*;

class LivePractice {

    static int sumOfDigits(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum = sum + digit;
            n = n / 10;
        }
        return sum;
    }

    public static void main(String[] args) {
        int result1 = sumOfDigits(135);
        System.out.println("135 sum of digits: " + result1);

        int result2 = sumOfDigits(279);
        System.out.println("279 sum of digits: " + result2);
    }
}
