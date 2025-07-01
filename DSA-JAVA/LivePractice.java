// import java.util.*;

class LivePractice {
    public static void main(String[] args) {
        int n = 3;
        for (int i = n; i >= 1; i--) {
            int stars = 2 * i;
            int spaces = n - i;
            for (int j = 1; j <= spaces; j++) {
                System.out.print("   ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
        //reverse
        for (int i = 1; i <= n; i++) {
            int stars = 2 * i;
            int spaces = n - i;
            for (int j = 1; j <= spaces; j++) {
                System.out.print("   ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }
}
