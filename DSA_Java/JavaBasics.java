import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        int count = 1;
        System.out.println("Enter the range: ");
        int range = sc.nextInt();

        while(count <= range){
            sum = sum + count;
            count++;
        }

        System.out.println("Sum of first " + range + " natural numbers is: " + sum);
    }
}