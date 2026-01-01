import java.util.*;

public class StringExample {

    public static void basicStringExamples() {
        char arr[] = { 'a', 'b', 'c', 'd' };
        String str = "abcd";
        String str2 = new String("xyz");

        System.out.println("Char Array: " + Arrays.toString(arr));
        System.out.println("String Literal: " + str);
        System.out.println("String Object: " + str2);
        System.out.println("Strings are IMMUTABLE");
    }

    public static void stringInputExample() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Hello " + name);
        sc.close();
    }

    public static void stringLengthExample() {
        String name = "Tony Stark";
        System.out.println("Name: " + name);
        System.out.println("Length: " + name.length());
    }

    public static void stringConcatenationExample() {
        String firstName = "Kaushik";
        String lastName = "Mandal";
        String fullName = firstName + " " + lastName;

        System.out.println("Full Name: " + fullName);
        System.out.println("First Character: " + fullName.charAt(0));
        System.out.print("Letters: ");
        printLetters(fullName);
    }

    public static void printLetters(String str) {
        for (int i = 0; i < str.length(); i++) {
            System.out.print(str.charAt(i) + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        basicStringExamples();
        System.out.println();

        stringLengthExample();
        System.out.println();

        stringConcatenationExample();
        System.out.println();

        // Uncomment to test input
        // stringInputExample();
    }
}