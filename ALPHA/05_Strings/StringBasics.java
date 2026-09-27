import java.util.Arrays;

public class StringBasics {
    public static void main(String[] args) {
        char arr[] = { 'a', 'b', 'c', 'd' };
        String str = "abcd";
        String str2 = new String("xyz");

        System.out.println("Char Array: " + Arrays.toString(arr));
        System.out.println("String Literal: " + str);
        System.out.println("String Object: " + str2);
        System.out.println("Strings are IMMUTABLE");

        String name = "Tony Stark";
        System.out.println("Name: " + name);
        System.out.println("Length: " + name.length());

        String firstName = "Kaushik";
        String lastName = "Mandal";
        String fullName = firstName + " " + lastName;
        System.out.println("Full Name: " + fullName);
        System.out.println("First Character: " + fullName.charAt(0));

        System.out.print("Letters: ");
        for (int i = 0; i < fullName.length(); i++) {
            System.out.print(fullName.charAt(i) + " ");
        }
        System.out.println();
    }
}
