public class SubstringDemo {
    public static String customSubstring(String str, int si, int ei) {
        StringBuilder substr = new StringBuilder();
        for (int i = si; i < ei; i++) {
            substr.append(str.charAt(i));
        }
        return substr.toString();
    }

    public static void main(String[] args) {
        String str = "HelloWorld";
        System.out.println("Original String: " + str);
        System.out.println("Custom Substring [0, 5): " + customSubstring(str, 0, 5));
        System.out.println("Built-in Substring [0, 5): " + str.substring(0, 5));
    }
}
