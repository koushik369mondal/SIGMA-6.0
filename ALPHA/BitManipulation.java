// import java.util.*;

public class BitManipulation {

    public static void bitwiseOperators(int a, int b) {
        System.out.println("a & b: " + (a & b)); // AND
        System.out.println("a | b: " + (a | b)); // OR
        System.out.println("a ^ b: " + (a ^ b)); // XOR
        System.out.println("~a: " + (~a)); // NOT
        System.out.println("a << 1: " + (a << 1)); // Left Shift
        System.out.println("a >> 1: " + (a >> 1)); // Right Shift
    }

    public static void oddOrEven(int n) {
        int bitMask = 1;
        if ((n & bitMask) == 0) {
            System.out.println("Even Number");
        } else {
            System.out.println("Odd Number");
        }
    }

    public static int getIthBit(int n, int i) {
        int bitMask = 1 << i;
        if ((n & bitMask) == 0) {
            return 0;
        } else {
            return 1;
        }
    }

    public static int setIthBit(int n, int i) {
        int bitMask = 1 << i;
        return n | bitMask;
    }

    public static int clearIthBit(int n, int i) {
        int bitMask = ~(1 << i);
        return n & bitMask;
    }

    public static int updateIntBit(int n, int i, int newBit) {
        if (newBit == 0) {
            return clearIthBit(n, i);
        } else {
            return setIthBit(n, i);
        }
    }

    public static int clearBitsinRange(int n, int i, int j) {
        int a = (~0) << (j + 1);
        int b = (1 << i) - 1;
        int bitMask = a | b;
        return n & bitMask;
    }

    public static boolean isPowerOfTwo(int n) {
        return (n & (n - 1)) == 0;
    }

    // What is the value of x^x for any valueof x?
    public static void s1() {
        int x = 5;
        System.out.println(x ^ x);
    }

    public static void main(String[] args) {
        // bitwiseOperators(5, 3);
        // oddOrEven(12);
        // oddOrEven(15);
        // System.out.println(getIthBit(10, 2)); // Here, 10 in binary is 1010
        // System.out.println(setIthBit(10, 2)); // Setting the 2nd bit of 10,
        // System.out.println(clearIthBit(10, 1)); // Clearing the 1st bit of 10
        // System.out.println(updateIntBit(10, 1, 1)); // Updating the 1st bit of 10 to
        // 1
        // System.out.println(isPowerOfTwo(8));
        s1();
    }
}