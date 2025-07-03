import java.util.*;

public class ArraysCC {
    // Method to reverse array
    public static void reverse(int numbers[]) {
        int first = 0;
        int last = numbers.length - 1;

        while (first <= last) {
            // Swap elements
            int temp = numbers[last];
            numbers[last] = numbers[first];
            numbers[first] = temp;

            // Move pointers
            first++;
            last--;
        }
    }

    // Main method
    public static void main(String[] args) {
        int numbers[] = { 2, 4, 6, 8, 10, 12, 14 };

        reverse(numbers); // Call reverse

        // Print reversed array
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
    }
}
