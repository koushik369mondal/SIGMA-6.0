public class CountElementInMatrix {
    public static int countOccurrences(int[][] arr, int target) {
        int n = arr.length;
        int m = arr[0].length;
        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (arr[i][j] == target) {
                    count++;
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[][] arr = {
            { 5, 6, 7 },
            { 4, 9, 10 },
            { 8, 7, 5 },
            { 7, 7, 6 }
        };
        int target = 7;
        System.out.println("Count of " + target + " is: " + countOccurrences(arr, target));
    }
}
