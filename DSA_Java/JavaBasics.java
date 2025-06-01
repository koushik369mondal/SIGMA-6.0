import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        int fact = 1;

        for(int i=num; i>1; i-- ){
            fact *= i;
        }
        System.out.println(fact);
    }
}
