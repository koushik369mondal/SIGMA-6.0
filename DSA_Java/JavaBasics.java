import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int ctr3 = 0, ctr5 = 0;

        for (int i = 1; i <= N; i++) {
            ctr3++;
            ctr5++;
            if (ctr3 == 3 && ctr5 == 5) {
                System.out.print("FizzBuzz ");
                ctr3 = ctr5 = 0;
            } else if (ctr3 == 3) {
                System.out.print("Fizz ");
                ctr3 = 0;
            } else if (ctr5 == 5) {
                System.out.print("Buzz ");
                ctr5 = 0;
            } else {
                System.out.print(i + " ");
            }
        }
    }
}
