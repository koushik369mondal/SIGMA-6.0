import java.util.*;

public class ArraysCC {
    public static int linearSearch(String fruits[], String key) {
        for (int i = 0; i < fruits.length; i++) {
            if (fruits[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        String fruits[] = {"chole bhature", "momo", "chowmin", "pani puri"};
        String key = "chole bhature";

        int index = linearSearch(fruits, key);
        if (index == -1) {
            System.out.println("NOT found. ");
        } else {
            System.out.println("Found at index : " + index);
        }
    }
}
