import java.util.*;

public class JavaBasics {
    public static void pattern() {
        int n = 5;
        for (int i = 1; i <= n; i++) {
            int spaces = n - i, stars = i;

            for (int j = 1; j <= spaces; j++) {
                System.out.print("  ");
            }

            for (int j = 1; j <= stars; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        pattern();
    }
}
