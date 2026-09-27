public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("");
        for (char ch = 'a'; ch <= 'z'; ch++) {
            sb.append(ch);
        }
        // O(26) time complexity with StringBuilder vs O(26 * n^2) with immutable String concatenation
        System.out.println("Result: " + sb.toString());
        System.out.println("Length: " + sb.length());
    }
}
