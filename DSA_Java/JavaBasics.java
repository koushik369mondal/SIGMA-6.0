import java.util.*;

public class JavaBasics {
    public static int calculateSum(int num1, int num2) { //parameters or formal parameters
        int sum = num1 + num2;
        return sum;
    }

    public static void swap(int a, int b){
        int temp = a;
        a = b;
        b = temp;

        System.out.println("a = " + a);
        System.out.println("b = " + b);
    }

    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        swap(a, b);
    }
}
