public class PowerLinear {
    // Calculates x^n in O(n) time
    public static int power(int x, int n) {
        if (n == 0) {
            return 1;
        }
        return x * power(x, n - 1);
    }

    public static void main(String[] args) {
        int x = 2;
        int n = 5;
        System.out.println(x + "^" + n + " (Linear O(n)) = " + power(x, n));
    }
}
