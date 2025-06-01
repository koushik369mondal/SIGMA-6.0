import java.util.*;

public class JavaBasics {
    public static void main(String[] args) {

        System.out.println("First");
        for (int idx = 2; idx % 3 != 0 && idx % 5 != 0; idx++) {
            System.out.println(idx);
        }

        System.out.println("Second");
        for (int idx = 2; idx % 3 != 0 || idx % 5 != 0; idx++) {
            System.out.println(idx);
        }
    }
}
