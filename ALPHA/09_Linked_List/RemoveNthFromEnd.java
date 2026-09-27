public class RemoveNthFromEnd {
    public static class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static Node deleteNthFromEnd(Node head, int n) {
        // Calculate size of linked list
        int size = 0;
        Node temp = head;
        while (temp != null) {
            temp = temp.next;
            size++;
        }

        if (n == size) {
            return head.next; // Remove head node
        }

        int iToFind = size - n;
        Node prev = head;
        for (int i = 1; i < iToFind; i++) {
            prev = prev.next;
        }
        prev.next = prev.next.next;
        return head;
    }

    public static void print(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        System.out.print("Original: ");
        print(head);

        int n = 3;
        head = deleteNthFromEnd(head, n);
        System.out.print("After deleting " + n + "th from end: ");
        print(head);
    }
}
