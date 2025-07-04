import java.util.*;

public class ArraysCC {
    public static void printSubArrays(int[] numbers) {
        int ts = 0; // total subarrays count
        int minSum = Integer.MAX_VALUE; // set to +∞
        int maxSum = Integer.MIN_VALUE; // set to -∞

        for (int i = 0; i < numbers.length; i++) { // start index
            for (int j = i; j < numbers.length; j++) { // end index
                int sum = 0; // subarray sum
                for (int k = i; k <= j; k++) { // print subarray
                    System.out.print(numbers[k] + " ");
                    sum += numbers[k]; // calculate sum
                }
                System.out.print("=> sum = " + sum);
                ts++; // count this subarray
                minSum = Math.min(minSum, sum); // update min
                maxSum = Math.max(maxSum, sum); // update max
                System.out.println();
            }
            System.out.println(); // space between each i
        }

        // final results
        System.out.println("Total subArrays: " + ts);
        System.out.println("Min sum: " + minSum);
        System.out.println("Max sum: " + maxSum);
    }

    public static void main(String[] args) {
        int[] numbers = { 2, 4, 6 }; // sample input
        printSubArrays(numbers);
    }
}
