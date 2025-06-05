import java.util.*;

public class JavaBasics {

    // Method to check if a number is a palindrome
    public static boolean PalindromeCheck(int num) {
        int originalNum = num;
        int reversed = 0;

        while (num > 0) {
            int lastDigit = num % 10;
            reversed = (reversed * 10) + lastDigit;
            num = num / 10;
        }

        return originalNum == reversed;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        // Call the method
        if (PalindromeCheck(number)) {
            System.out.println(number + " is a palindrome.");
        } else {
            System.out.println(number + " is not a palindrome.");
        }
    }
}
