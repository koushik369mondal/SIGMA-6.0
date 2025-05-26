import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        int a = 10;
        System.out.println("Initial value of a: " + a);

        // Post-increment: value is used first, then incremented
        System.out.println("Post-increment (a++): " + a++);
        System.out.println("Value after post-increment: " + a);

        // Post-decrement: value is used first, then decremented
        System.out.println("Post-decrement (a--): " + a--);
        System.out.println("Value after post-decrement: " + a);

        // Pre-decrement: value is decremented first, then used
        System.out.println("Pre-decrement (--a): " + --a);
        System.out.println("Value after pre-decrement: " + a);

        // Pre-increment: value is incremented first, then used
        System.out.println("Pre-increment (++a): " + ++a);
        System.out.println("Value after pre-increment: " + a);
    }
}