public class DetectAndRemoveCycle {
    public static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static boolean isCycle(Node head) {
        Node slow = head;
        Node fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        return false;
    }

    public static void removeCycle(Node head) {
        Node slow = head;
        Node fast = head;
        boolean cycle = false;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                cycle = true;
                break;
            }
        }

        if (!cycle) {
            return;
        }

        // Find meeting point
        slow = head;
        Node prev = null;

        // Special case: cycle starts at head
        if (slow == fast) {
            while (fast.next != slow) {
                fast = fast.next;
            }
            fast.next = null;
            return;
        }

        while (slow != fast) {
            prev = fast;
            slow = slow.next;
            fast = fast.next;
        }

        // Break cycle
        prev.next = null;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = head; // 1 -> 2 -> 3 -> 1

        System.out.println("Cycle detected initially: " + isCycle(head));
        removeCycle(head);
        System.out.println("Cycle detected after removal: " + isCycle(head));
    }
}
