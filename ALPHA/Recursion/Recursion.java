package Recursion;

public class Recursion {
    public static void printDec(int n){
        if(n==1){
            System.out.println(n);
            return;
        }
        System.out.print(n + " ");
        printDec(n-1);
    }

    public static void printInc(int n){
        if(n == 1){
            System.out.print(1 + " ");
            return;
        }
        System.out.print(n + " ");
        printInc(n-1);
    }

    public static int fact(int n){
        if(n==0){
            return 1;
        }
        int fnm1 = fact(n-1);
        int fn = n * fnm1;
        return fn;
    }

    public static int sum(int n){
        if(n==1){
            return 1;
        }
        int snm1 = sum(n-1);
        int sn = n + snm1;
        return sn;
    }

    public static int fib(int n){
        if(n == 0 || n == 1){
            return n;
        }
        int f1 = fib(n-1);
        int f2 = fib(n-2);
        int fn = f1 + f2;
        return fn;
    }

    public static boolean isSorted(int arr[], int i){
        if(i == arr.length-1){
            return true;
        }
        if(arr[i] > arr[i+1]){
            return false;
        }
        return isSorted(arr, i+1);
    }

    public static void main(String[] args) {
        // printDec(10);
        // printInc(10);
        // System.out.println(fact(5));
        // System.out.println(sum(5));
        // System.out.println(fib(10));
        int[] arr = {1, 2, 3, 6, 4, 5};
        System.out.println(isSorted(arr, 0));
    }
}


