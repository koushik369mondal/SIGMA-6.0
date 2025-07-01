import java.util.*;

public class Patterns {
        // public static void butterfly(int n) {
    // // 1st half
    // for (int i = 1; i <= n; i++) {
    // // stars - i
    // for (int j = 1; j <= i; j++) {
    // System.out.print("* ");
    // }
    // // spaces - 2*(n-i)
    // for (int j = 1; j <= 2 * (n - i); j++) {
    // System.out.print(" ");
    // }
    // // stars - i
    // for (int j = 1; j <= i; j++) {
    // System.out.print("* ");
    // }
    // System.out.println();
    // }
    // // 2nd half
    // for (int i = n; i >= 1; i--) {
    // // stars - i
    // for (int j = 1; j <= i; j++) {
    // System.out.print("* ");
    // }
    // // spaces - 2*(n-i)
    // for (int j = 1; j <= 2 * (n - i); j++) {
    // System.out.print(" ");
    // }
    // // stars - i
    // for (int j = 1; j <= i; j++) {
    // System.out.print("* ");
    // }
    // System.out.println();
    // }
    // }

    // public static void solid_rhombus(int n) {
    // for (int i = 1; i <= n; i++) {
    // // spaces
    // for (int j = 1; j <= (n - i); j++) {
    // System.out.print(" ");
    // }
    // //stars
    // for(int j=1; j<=n; j++){
    // System.out.print("* ");
    // }
    // System.out.println();
    // }
    // }

    // public static void hollow_rhombus(int n) {
    // for (int i = 1; i <= n; i++) {
    // // spaces
    // for (int j = 1; j <= (n - i); j++) {
    // System.out.print(" ");
    // }
    // // hollow rectangle - stars
    // for (int j = 1; j <= n; j++) {
    // if (i == 1 || i == n || j == 1 || j == n) {
    // System.out.print("* ");
    // } else {
    // System.out.print(" ");
    // }
    // }
    // System.out.println();
    // }
    // }

    // public static void diamond(int n) {
    //     // 1st half
    //     for (int i = 1; i <= n; i++) {
    //         // spaces
    //         for (int j = 1; j <= (n - i); j++) {
    //             System.out.print("  ");
    //         }
    //         // stars
    //         for (int j = 1; j <= (2 * i) - 1; j++) {
    //             System.out.print("* ");
    //         }
    //         System.out.println();
    //     }
    //     // 2nd half
    //     for (int i = n; i >= 1; i--) {
    //         // spaces
    //         for (int j = 1; j <= (n - i); j++) {
    //             System.out.print("  ");
    //         }
    //         // stars
    //         for (int j = 1; j <= (2 * i) - 1; j++) {
    //             System.out.print("* ");
    //         }
    //         System.out.println();
    //     }
    // }

    public static void palindromic_pattern (int n){
        for (int i = 1; i <= n; i++) {
            int spaces = n - i;
            for(int j=1; j<=spaces; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print(j);
            }
            for(int j=i-1; j>=1; j--){
                System.out.print(j);
            }
            System.out.println();
        }
        //reverse
        for (int i = n; i >= 1; i--) {
            int spaces = n - i;
            for(int j=1; j<=spaces; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print(j);
            }
            for(int j=i-1; j>=1; j--){
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        // butterfly(4);
        // solid_rhombus(5);
        // hollow_rhombus(5);
        // diamond(3);
        palindromic_pattern(4);
    }
}
