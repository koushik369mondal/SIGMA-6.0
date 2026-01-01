import java.util.*;

public class StringExample{
    public static void main(String[] args) {
        char arr[] = {'a', 'b', 'c', 'd'};
        String str = "abcd";
        String str2 = new String("xyz");

        //Strings are IMMUTABLE
        Scanner sc = new Scanner(System.in);
        String name;
        name = sc.nextLine();
        System.out.println("Hello " + name);
    }
}