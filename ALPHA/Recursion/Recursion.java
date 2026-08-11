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
        int fn = n * fact(n-1);
        return fn;
    }

    public static void main(String[] args) {
        // printDec(10);
        // printInc(10);
        System.out.println(fact(5));;
    }
}


