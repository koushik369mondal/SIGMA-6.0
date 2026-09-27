public class StringReplaceDemo {
    public static void main(String[] args) {
        String str = "ApnaCollege";
        String replaced = str.replace("l", "   ");
        System.out.println("Original: " + str);
        System.out.println("After replace('l', '   '): " + replaced);
    }
}
