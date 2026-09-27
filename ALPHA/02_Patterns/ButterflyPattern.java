public class ButterflyPattern {
    public static void butterfly(int n) {
        for (int i = 1; i <= n; i++) {
            int stars = i;
            int spaces = 2 * (n - i);
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            for (int j = 1; j <= spaces; j++) {
                System.out.print("   ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
        // reverse
        for (int i = n; i >= 1; i--) {
            int stars = i;
            int spaces = 2 * (n - i);
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            for (int j = 1; j <= spaces; j++) {
                System.out.print("   ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print(" * ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        butterfly(4);
    }
}
