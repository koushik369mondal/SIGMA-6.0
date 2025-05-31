import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int n = sc.nextInt();
        int lastDigit = 0;
        while(n > 0){
            lastDigit = n % 10;
            System.out.print(lastDigit);
            n /= 10;
        }
        System.out.println();
    }
}