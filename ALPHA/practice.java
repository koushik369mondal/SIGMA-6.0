import java.util.Scanner;

class Practise {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        double tax;
        
        System.out.println("Enter monthly income:");
        n = sc.nextInt();

        if (n >= 15000 && n < 30000) {
            tax = n * (15.0 / 100); // 15%
            System.out.println("Tax: " + tax);
        } else if (n >= 30000 && n < 50000) {
            tax = n * (18.0 / 100); // 18%
            System.out.println("Tax: " + tax);
        } else if (n >= 50000) {
            tax = n * (20.0 / 100); // 20%
            System.out.println("Tax: " + tax);
        } else {
            System.out.println("Invalid input");
        }

        sc.close();
    }
}
