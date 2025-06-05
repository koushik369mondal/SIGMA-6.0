import java.util.*;

public class JavaBasics {
    public static void myMethod(int a, int b, int c) {
        int avg = (a + b + c) / 3;
        System.out.println("AVerage is : " + avg);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int a = sc.nextInt();
        System.out.println("Enter second number: ");
        int b = sc.nextInt();
        System.out.println("Enter third number: ");
        int c = sc.nextInt();
        myMethod(a, b, c);
    }
}
