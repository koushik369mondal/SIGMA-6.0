import java.util.*;

class Ideone {
    // Question 1 - Count occurrences of 7 in 2D array
    public static void question1() {
        int arr[][] = {
                { 5, 6, 7 },
                { 4, 9, 10 },
                { 8, 7, 5 },
                { 7, 7, 6 }
        };
        int n = arr.length;
        int m = arr[0].length;
        int count = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (arr[i][j] == 7) {
                    count++;
                }
            }
        }
        System.out.println("Count of 7 is: " + count);
    }

    // Question 2 - Sum of 3rd column
    public static void question2() {
        int arr[][] = {
                { 10, 20, 30, 40 },
                { 7, 9, 8, 6 },
                { 4, 3, 2, 1 },
                { 7, 8, 6, 6 },
                { 9, 9, 8, 8 }
        };
        int n = arr.length;
        int m = arr[0].length;
        int sum = 0;
        // 2nd row index = 1
        // for(int i=0; i<m; i++){
        // sum = sum + arr[1][i];
        // }
        // 3rd col means j=2 col
        for (int i = 0; i < n; i++) {
            sum = sum + arr[i][2];
        }
        System.out.println("Sum of 3rd column is: " + sum);
    }

    // Question 3 - Transpose of a matrix
    public static void question3() {
        int arr[][] = {
                { 5, 5, 7 },
                { 1, 2, 3 },
                { 10, 15, 39 },
                { 60, 70, 80 }
        };
        int n = arr.length;
        int m = arr[0].length;
        int transpose[][] = new int[m][n];
        // iterate in original matrix and transfer elements to transpose matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                transpose[j][i] = arr[i][j];
            }
        }
        // print transpose matrix
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(transpose[i][j] + " ");
            }
            System.out.println();
        }
    }

    //Question 4 
    public static void question4(){
        int arr[][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        int n = arr.length;
        int m = arr[0].length;
        for(int i=0; i<n; i++){
            for(int j=i; j<m; j++){
                int temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }
        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        // question1();
        // question2();
        // question3();
        question4();
    }
}