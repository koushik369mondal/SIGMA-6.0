import java.util.HashMap;

public class ValidAnagram {
    // Approach 1: Using Character Frequency Array (O(n) time, O(1) space)
    public static boolean isAnagramArray(String s, String t) {
        if (s.length() != t.length()) return false;

        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        for (int c : count) {
            if (c != 0) return false;
        }
        return true;
    }

    // Approach 2: Using HashMap (O(n) time, O(k) space)
    public static boolean isAnagramMap(String s, String t) {
        if (s.length() != t.length()) return false;

        HashMap<Character, Integer> m1 = new HashMap<>();
        HashMap<Character, Integer> m2 = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            m1.put(s.charAt(i), m1.getOrDefault(s.charAt(i), 0) + 1);
            m2.put(t.charAt(i), m2.getOrDefault(t.charAt(i), 0) + 1);
        }
        return m1.equals(m2);
    }

    public static void main(String[] args) {
        String s1 = "listen";
        String t1 = "silent";
        System.out.println(s1 + " & " + t1 + " are anagrams: " + isAnagramArray(s1, t1));

        String s2 = "hello";
        String t2 = "billion";
        System.out.println(s2 + " & " + t2 + " are anagrams: " + isAnagramArray(s2, t2));
    }
}
