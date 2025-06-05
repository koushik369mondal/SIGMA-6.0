public class JavaBasics {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int negative = -25;

        // a. Math.min()
        System.out.println("Minimum of " + a + " and " + b + ": " + Math.min(a, b));

        // b. Math.max()
        System.out.println("Maximum of " + a + " and " + b + ": " + Math.max(a, b));

        // c. Math.sqrt()
        System.out.println("Square root of 16: " + Math.sqrt(16));

        // d. Math.pow()
        System.out.println("2 raised to the power 3: " + Math.pow(2, 3));

        // e. Math.avg() → Not available, use manual calculation
        double avg = (a + b) / 2.0;
        System.out.println("Average of " + a + " and " + b + ": " + avg);

        // f. Math.abs()
        System.out.println("Absolute value of " + negative + ": " + Math.abs(negative));
    }
}
