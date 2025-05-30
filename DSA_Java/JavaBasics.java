import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number:");
        int number1 = sc.nextInt();
        System.out.println("Enter second number:");
        int number2 = sc.nextInt();

        if (number1 > number2){
            System.out.println("Number 1 is greater");
        }else{
            System.out.println("Number 2 is greater");
        }
    }
}