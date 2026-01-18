// import java.util.*;

public class BitManipulation {

    public static void bitwiseOperators(int a, int b){
        System.out.println("a & b: " + (a & b)); // AND
        System.out.println("a | b: " + (a | b)); // OR
        System.out.println("a ^ b: " + (a ^ b)); // XOR
        System.out.println("~a: " + (~a));       // NOT
        System.out.println("a << 1: " + (a << 1)); // Left Shift
        System.out.println("a >> 1: " + (a >> 1)); // Right Shift
    }

    public static void oddOrEven(int n){
        int bitMask = 1;
        if((n & bitMask) == 0){
            System.out.println("Even Number");
        } else {
            System.out.println("Odd Number");
        }
    }

    public static void main(String[] args) {
        bitwiseOperators(5, 3);
        oddOrEven(4);
        oddOrEven(12);
        oddOrEven(15);
    }
}