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

    public static void isPalindrome() {
        String str = "racecar";
        for (int i = 0; i < str.length() / 2; i++) {
            int n = str.length();
            if (str.charAt(i) != str.charAt(n - 1 - i)) {
                // Not a palindrome
                System.out.println(false);
                return;
            }
        }
        // Is a palindrome
        System.out.println(true);
    }

    public static void getShortestPath() {
        String path = "WNEENESENNN";
        int x = 0, y = 0;
        for (int i = 0; i < path.length(); i++) {
            char dir = path.charAt(i);
            // South
            if (dir == 'S') {
                y--;
            }
            // North
            else if (dir == 'N') {
                y++;
            }
            // West
            else if (dir == 'W') {
                x--;
            }
            // East
            else {
                x++;
            }
        }
        int X2 = x * x;
        int Y2 = y * y;
        float shortestPath = (float) Math.sqrt(X2 + Y2);
        System.out.println("Shortest Path: " + shortestPath);
    }

    public static void compare() {
        String s1 = "Kaushik";
        String s2 = "Kaushik";
        String s3 = new String("Kaushik");

        if (s1 == s2) {
            System.out.println("s1 and s2 are equal");
        } else {
            System.out.println("s1 and s2 are not equal");
        }

        if (s1 == s3) {
            System.out.println("s1 and s3 are equal");
        } else {
            System.out.println("s1 and s3 are not equal");
        }

        if (s1.equals(s3)) {
            System.out.println("s1 and s3 are equal using equals()");
        } else {
            System.out.println("s1 and s3 are not equal using equals()");
        }
    }

    public static String subString() {
        String str = "HelloWorld";
        int si = 0;
        int ei = 5;
        String substr = "";
        for (int i = si; i < ei; i++) {
            substr += str.charAt(i);
        }
        System.out.println("Substring: " + substr);
        return substr;
    }

    public static void subStringBuildIn() {
        String str = "HelloWorld";
        String substr = str.substring(0, 5);
        System.out.println("Substring using built-in method: " + substr);
    }

    public static void largestString() {
        String fruits[] = { "Apple", "Mango", "Banana" };
        String largest = fruits[0];
        for(int i=1; i<fruits.length; i++){
            if(largest.compareTo(fruits[i]) < 0){
                largest = fruits[i];
            }
        }
        // Mango is largest as M comes last in alphabetical order
        System.out.println("Largest String: " + largest);
    }

    public static void stringBuilder(){
        StringBuilder sb = new StringBuilder("");
        for(char ch='a'; ch<='z'; ch++){
            sb.append(ch);
        }
        // O(26) time complexity
        // O(26 * n^2) time complexity for string concatenation without StringBuilder
        System.out.println(sb.length());
    }

    public static void main(String[] args) {
        // basicStringExamples();
        // stringLengthExample();
        // stringConcatenationExample();
        // isPalindrome();
        // getShortestPath();
        // compare();
        // subString();
        // subStringBuildIn();
        // largestString();
        stringBuilder();
    }
}