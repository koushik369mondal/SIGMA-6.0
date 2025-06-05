import java.util.*;

public class JavaBasics {

    // Method to calculate sum of digits
    public static int sumOfDigits(int num) {
        int sum = 0;

        while (num > 0) {
            int lastDigit = num % 10;  // b. Find last digit
            sum += lastDigit;          // c. Add to sum
            num /= 10;                 // d. Remove last digit
        }

        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        int result = sumOfDigits(number);  // Call the method

        System.out.println("Sum of digits: " + result);
    }
}
