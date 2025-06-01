import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int evenSum = 0;
        int oddSum = 0;
        System.out.println("Enter a number of integers: ");
        int count = sc.nextInt();

        System.out.println("Enter "+ count + " integers");

        for (int i = 0; i < count; i++) {
            int n = sc.nextInt();

            if (n % 2 == 0) {
                evenSum += n;
            } else {
                oddSum += n;
            }
        }

        System.out.println("Even Sum = " + evenSum);
        System.out.println("Odd Sum = " + oddSum);
    }
}
