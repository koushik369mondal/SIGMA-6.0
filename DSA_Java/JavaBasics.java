import java.util.*;
public class JavaBasics{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first item price:");
        float price1 = sc.nextFloat();
        System.out.println("Enter second item price:");
        float price2 = sc.nextFloat();
        System.out.println("Enter third item price:");
        float price3 = sc.nextFloat();
        float totalPrice = price1 + price2 + price3;
        System.out.println("Total price of items with 18% gst: " + totalPrice * 1.18);
    }
}