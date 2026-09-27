public class LargestStringLexicographically {
    public static String getLargestString(String[] fruits) {
        String largest = fruits[0];
        for (int i = 1; i < fruits.length; i++) {
            if (largest.compareTo(fruits[i]) < 0) {
                largest = fruits[i];
            }
        }
        return largest;
    }

    public static void main(String[] args) {
        String fruits[] = { "Apple", "Mango", "Banana" };
        System.out.println("Largest String lexicographically: " + getLargestString(fruits));
    }
}
