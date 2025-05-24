import java.util.*;
public class JavaBasics{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // String input = sc.next();
        // System.out.println("You entered: " + input);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello " + name);
    }
}