import java.util.LinkedList;

public class JCFLLDemo {
    public static void main(String[] args) {
        // Create LinkedList using Java Collections Framework
        LinkedList<Integer> ll = new LinkedList<>();

        // Add
        ll.addLast(1);
        ll.addLast(2);
        ll.addFirst(0);
        // Expected: [0, 1, 2]
        System.out.println("After additions: " + ll);

        // Remove
        ll.removeLast();
        ll.removeFirst();
        System.out.println("After removals: " + ll);
    }
}
