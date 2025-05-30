import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = 2;
        switch(num){
            case 1: System.out.println("samosa");
            break;
            case 2: System.out.println("Burger");
            break;
            case 3: System.out.println("Mango shake");
            break;
            default: System.out.println("No item found");
        }
    }
}