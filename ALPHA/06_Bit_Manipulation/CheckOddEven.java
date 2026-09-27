public class CheckOddEven {
    public static boolean isEven(int n) {
        return (n & 1) == 0;
    }

    public static void main(String[] args) {
        int n1 = 12;
        int n2 = 15;
        System.out.println(n1 + " is " + (isEven(n1) ? "Even" : "Odd"));
        System.out.println(n2 + " is " + (isEven(n2) ? "Even" : "Odd"));
    }
}
