public class AddOneUsingBitwise {
    public static int addOne(int x) {
        // ~x = -(x + 1) => -~x = x + 1
        return -~x;
    }

    public static void main(String[] args) {
        int[] tests = { 6, -4, 0, 99 };
        for (int x : tests) {
            System.out.println(x + " + 1 = " + addOne(x));
        }
    }
}
