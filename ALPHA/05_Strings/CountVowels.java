public class CountVowels {
    public static boolean isVowel(char ch) {
        char lower = Character.toLowerCase(ch);
        return (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u');
    }

    public static int countVowels(String input) {
        int count = 0;
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (isVowel(ch)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String test = "Kaushik Mandal";
        System.out.println("String: " + test);
        System.out.println("Total vowels: " + countVowels(test));
    }
}
