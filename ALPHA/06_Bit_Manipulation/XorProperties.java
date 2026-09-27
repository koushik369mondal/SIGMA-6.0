public class XorProperties {
    public static void main(String[] args) {
        int x = 5;
        // x ^ x = 0 and x ^ 0 = x
        System.out.println("x = " + x);
        System.out.println("x ^ x = " + (x ^ x));
        System.out.println("x ^ 0 = " + (x ^ 0));
    }
}
