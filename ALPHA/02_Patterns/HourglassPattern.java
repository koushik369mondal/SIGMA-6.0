public class HourglassPattern {
    public static void hourglassPattern(int n) {
        for (int i = n; i >= 1; i--) {
            int stars = 2 * i;
            int spaces = n - i;
            for (int j = 1; j <= spaces; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
        // reverse
        for (int i = 1; i <= n; i++) {
            int stars = 2 * i;
            int spaces = n - i;
            for (int j = 1; j <= spaces; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        hourglassPattern(3);
    }
}
