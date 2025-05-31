import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        do{
            System.out.println("Enter a number: ");
            int num = sc.nextInt();

            if(num % 10 == 0){
                continue;
            }

            System.out.println("Number was: "+ num);
        }while(true);
    }
}