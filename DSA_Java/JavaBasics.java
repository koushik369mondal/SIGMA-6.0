import java.util.*;

public class JavaBasics {
    public static int sum(int a, int b){
        return a + b;
    }

    public static float sum(float a, float b){
        return a + b ;
    }

    public static boolean isPrime(int n){
        boolean isPrime = true;
        for(int i=2; i<=n-1; i++){
            if(n % i == 0){
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(5));
    }
}
