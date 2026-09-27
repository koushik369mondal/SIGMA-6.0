public class SwapWithoutTemp {
    public static void swap(int a, int b) {
        System.out.println("Before swap: a = " + a + ", b = " + b);
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        System.out.println("After swap: a = " + a + ", b = " + b);
    }

    public static void main(String[] args) {
        swap(10, 5);
    }
}
