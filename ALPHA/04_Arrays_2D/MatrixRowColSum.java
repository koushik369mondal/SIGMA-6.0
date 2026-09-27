public class MatrixRowColSum {
    public static int sumOfColumn(int[][] arr, int colIdx) {
        int n = arr.length;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += arr[i][colIdx];
        }
        return sum;
    }

    public static int sumOfRow(int[][] arr, int rowIdx) {
        int m = arr[0].length;
        int sum = 0;
        for (int j = 0; j < m; j++) {
            sum += arr[rowIdx][j];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[][] arr = {
            { 10, 20, 30, 40 },
            { 7, 9, 8, 6 },
            { 4, 3, 2, 1 },
            { 7, 8, 6, 6 },
            { 9, 9, 8, 8 }
        };
        System.out.println("Sum of 3rd column (index 2) is: " + sumOfColumn(arr, 2));
        System.out.println("Sum of 2nd row (index 1) is: " + sumOfRow(arr, 1));
    }
}
