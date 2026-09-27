import java.util.Arrays;

public class CopyConstructorDemo {
    static class Student {
        String name;
        int roll;
        String password;
        int[] marks;

        Student() {
            marks = new int[3];
        }

        // Deep copy constructor
        Student(Student s1) {
            marks = new int[3];
            this.name = s1.name;
            this.roll = s1.roll;
            this.password = s1.password;
            for (int i = 0; i < marks.length; i++) {
                this.marks[i] = s1.marks[i];
            }
        }

        // Configurable copy constructor (shallow vs deep)
        Student(Student s1, boolean isDeep) {
            if (isDeep) {
                marks = new int[3];
                this.name = s1.name;
                this.roll = s1.roll;
                this.password = s1.password;
                for (int i = 0; i < marks.length; i++) {
                    this.marks[i] = s1.marks[i];
                }
            } else {
                this.name = s1.name;
                this.roll = s1.roll;
                this.password = s1.password;
                this.marks = s1.marks; // shallow reference copy
            }
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Sahil";
        s1.roll = 12;
        s1.marks[0] = 100;
        s1.marks[1] = 90;
        s1.marks[2] = 80;

        // Deep copy
        Student s2 = new Student(s1);
        s2.marks[2] = 100; // Modifying s2 should NOT affect s1

        System.out.println("s1 marks after s2 modification (Deep Copy test):");
        System.out.println(Arrays.toString(s1.marks));

        // Shallow copy demonstration
        Student s3 = new Student(s1, false);
        s3.marks[0] = 50; // Modifying s3 WILL affect s1
        System.out.println("s1 marks after s3 modification (Shallow Copy test):");
        System.out.println(Arrays.toString(s1.marks));
    }
}
