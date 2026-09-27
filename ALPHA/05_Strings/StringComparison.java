public class StringComparison {
    public static void main(String[] args) {
        String s1 = "Kaushik";
        String s2 = "Kaushik";
        String s3 = new String("Kaushik");

        // == checks reference / memory location
        if (s1 == s2) {
            System.out.println("s1 == s2: true (both point to same string pool literal)");
        } else {
            System.out.println("s1 == s2: false");
        }

        if (s1 == s3) {
            System.out.println("s1 == s3: true");
        } else {
            System.out.println("s1 == s3: false (s3 is a new object in heap)");
        }

        // .equals() checks actual character content
        if (s1.equals(s3)) {
            System.out.println("s1.equals(s3): true (content is identical)");
        } else {
            System.out.println("s1.equals(s3): false");
        }
    }
}
