import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your income:");
        int income = sc.nextInt();
        int tax;
        
        if(income < 500000){
            tax = 0;
            System.out.println("tax is zero");
        } else if(income > 500000 && income < 1000000){
            tax = (int)(income * 0.2f);
            System.out.println("tax is " + tax);
        } else{
            tax = (int)(income * 0.3f);
            System.out.println("tax is " + tax);
        }
    }
}