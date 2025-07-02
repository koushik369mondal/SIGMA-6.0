public class House {
    public static void main(String[] args) {
        int n = 5; // height of the house body

        // Print the roof (triangle)
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = i; j < n; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Print the body (square)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= 2 * n - 1; j++) {
                if (i == 1 || i == n || j == 1 || j == 2 * n - 1) {
                    System.out.print("*"); // walls and floor
                } else {
                    System.out.print(" "); // inside of the house
                }
            }
            System.out.println();
        }
    }
}
