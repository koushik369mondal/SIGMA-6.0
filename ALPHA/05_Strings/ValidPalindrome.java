public class ValidPalindrome {
    public static boolean isPalindrome(String str) {
        int n = str.length();
        for (int i = 0; i < n / 2; i++) {
            if (str.charAt(i) != str.charAt(n - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String s1 = "racecar";
        String s2 = "hello";
        System.out.println(s1 + " is palindrome: " + isPalindrome(s1));
        System.out.println(s2 + " is palindrome: " + isPalindrome(s2));
    }
}
