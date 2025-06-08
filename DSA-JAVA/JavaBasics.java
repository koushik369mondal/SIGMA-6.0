import java.util.*;

public class JavaBasics {
    public static void pattern() {
        int n = 5;
        int i = 1;

        do {
            int spaces = n - i;
            int j = 1;

            // Print spaces
            do {
                if (j > spaces)
                    break;
                System.out.print("  ");
                j++;
            } while (true);

            // Print stars
            j = 1;
            do {
                if (j > i)
                    break;
                System.out.print("* ");
                j++;
            } while (true);

            System.out.println();
            i++;
        } while (i <= n);
    }

    public static void main(String[] args) {
        pattern();
    }
}
