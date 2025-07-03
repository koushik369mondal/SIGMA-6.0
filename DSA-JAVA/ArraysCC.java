import java.util.*;

public class ArraysCC {
    public static void main(String[] args) {
        int marks[] = new int[100];

        Scanner sc = new Scanner(System.in);
        // int phy;
        // phy = sc.nextInt();

        marks[0] = sc.nextInt(); //phy
        marks[1] = sc.nextInt(); //chem
        marks[2] = sc.nextInt(); //math

        System.out.println("Physics: " + marks[0]);
        System.out.println("Chemistry: " + marks[1]);
        System.out.println("Math: " + marks[2]);
        // System.out.println("Not Defined: " + marks[9]);

        marks[2] = 100;
        System.out.println("Math: " + marks[2]);
    }

}
