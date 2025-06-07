import java.util.*;

public class JavaBasics {
    public static void hello() {
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(i);
                System.out.println(j);
            }
        }
    }

    public static void main(String[] args) {
        hello();
    }
}
