import java.util.*;

public class JavaBasics {
    public static void pattern() {
        int n = 5;
        int i = 1;

        while (i <= n) {
            int spaces = n - i;
            int j = 1;

            // Print spaces
            while (j <= spaces) {
                System.out.print("  ");
                j++;
            }

            // Print stars
            j = 1;
            while (j <= i) {
                System.out.print("* ");
                j++;
            }

            System.out.println();
            i++;
        }
    }

    public static void main(String[] args) {
        pattern();
    }
}
