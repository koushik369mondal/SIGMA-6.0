import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = 4;
        String type = (num % 2 == 0) ? "even" : "odd";
        System.out.println(type);
    }
}