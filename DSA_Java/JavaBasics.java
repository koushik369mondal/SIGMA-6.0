import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = 1;
        System.out.println("Enter the range: ");
        int range = sc.nextInt();
        while(count <= range){
            System.out.print(count + " ");
            count++;
        }
    }
}