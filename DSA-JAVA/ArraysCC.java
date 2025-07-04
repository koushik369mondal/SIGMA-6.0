import java.util.*;

public class ArraysCC {
    public static void printSubArrays(int numbers[]) {
        int ts = 0; // total subArrays counter
        int minSum = Integer.MAX_VALUE; //  to track minimum subArray sum
        int maxSum = Integer.MIN_VALUE; //  to track maximum subArray sum

        for (int i = 0; i < numbers.length; i++) {
            int start = i;

            for (int j = i; j < numbers.length; j++) {
                int end = j;
                int sum = 0; //  initialize sum of this subArray

                for (int k = start; k <= end; k++) {
                    System.out.print(numbers[k] + " "); // print elements
                    sum += numbers[k]; //  add to subArray sum
                }

                System.out.print("=> sum = " + sum); //  print subArray sum
                ts++; // count this subArray

                //  update min and max
                if (sum < minSum) {
                    minSum = sum;
                }
                if (sum > maxSum) {
                    maxSum = sum;
                }

                System.out.println(); //  newline after each subArray
            }

            System.out.println(); //  newline after each outer loop for clarity
        }

        System.out.println("Total subArrays: " + ts);
        System.out.println("Minimum sum of subArrays: " + minSum); 
        System.out.println("Maximum sum of subArrays: " + maxSum);
    }

    public static void main(String[] args) {
        int numbers[] = { 2, 4, 6 };
        printSubArrays(numbers);
    }
}
