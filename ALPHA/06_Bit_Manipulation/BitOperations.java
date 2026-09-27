public class BitOperations {
    public static int getIthBit(int n, int i) {
        int bitMask = 1 << i;
        return (n & bitMask) == 0 ? 0 : 1;
    }

    public static int setIthBit(int n, int i) {
        int bitMask = 1 << i;
        return n | bitMask;
    }

    public static int clearIthBit(int n, int i) {
        int bitMask = ~(1 << i);
        return n & bitMask;
    }

    public static int updateIthBit(int n, int i, int newBit) {
        if (newBit == 0) {
            return clearIthBit(n, i);
        } else {
            return setIthBit(n, i);
        }
    }

    public static int clearBitsInRange(int n, int i, int j) {
        int a = (~0) << (j + 1);
        int b = (1 << i) - 1;
        int bitMask = a | b;
        return n & bitMask;
    }

    public static void main(String[] args) {
        int n = 10; // binary: 1010
        System.out.println("Original number: " + n + " (binary: " + Integer.toBinaryString(n) + ")");
        System.out.println("2nd bit: " + getIthBit(n, 2));
        System.out.println("Set 2nd bit: " + setIthBit(n, 2));
        System.out.println("Clear 1st bit: " + clearIthBit(n, 1));
        System.out.println("Update 1st bit to 1: " + updateIthBit(n, 1, 1));
        System.out.println("Clear bits in range [2, 4] for 31: " + clearBitsInRange(31, 2, 4));
    }
}
