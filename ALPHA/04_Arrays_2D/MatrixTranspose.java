public class MatrixTranspose {
    public static int[][] transpose(int[][] arr) {
        int n = arr.length;
        int m = arr[0].length;
        int[][] transpose = new int[m][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                transpose[j][i] = arr[i][j];
            }
        }
        return transpose;
    }

    public static void printMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int[][] arr = {
            { 5, 5, 7 },
            { 1, 2, 3 },
            { 10, 15, 39 },
            { 60, 70, 80 }
        };
        System.out.println("Original Matrix:");
        printMatrix(arr);

        int[][] result = transpose(arr);
        System.out.println("Transposed Matrix:");
        printMatrix(result);
    }
}
