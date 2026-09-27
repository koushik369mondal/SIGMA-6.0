public class PowerOfTwo {
    public static boolean isPowerOfTwo(int n) {
        if (n <= 0) return false;
        return (n & (n - 1)) == 0;
    }

    public static void main(String[] args) {
        System.out.println("Is 8 power of 2: " + isPowerOfTwo(8));
        System.out.println("Is 14 power of 2: " + isPowerOfTwo(14));
        System.out.println("Is 16 power of 2: " + isPowerOfTwo(16));
    }
}
