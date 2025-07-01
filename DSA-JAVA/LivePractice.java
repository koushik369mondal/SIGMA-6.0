// import java.util.*;

class LivePractice {
    public static void main(String[] args) {
        int n = 5;
        for (int i = n; i >= 1; i--) {
            int spaces = n - i;
            for(int j=1; j<=spaces; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            for(int j=i-1; j>=1; j--){
                System.out.print("*");
            }
            System.out.println();
        }
        //reverse
        for (int i = 2; i <= n; i++) {
            int spaces = n - i;
            for(int j=1; j<=spaces; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            for(int j=i-1; j>=1; j--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
