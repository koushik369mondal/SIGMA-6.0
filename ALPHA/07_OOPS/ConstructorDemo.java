import java.util.Arrays;

public class ConstructorDemo {
    static class Student {
        String name;
        int age;
        String password;
        int[] marks;

        // Non-parameterized constructor
        Student() {
            this.name = "Default Name";
            this.age = 18;
            this.password = "defaultPassword";
            this.marks = new int[3];
        }

        // Parameterized constructor
        Student(String name, int age) {
            this.name = name;
            this.age = age;
            this.password = "defaultPassword";
            this.marks = new int[3];
        }

        // Copy constructor
        Student(Student s) {
            this.name = s.name;
            this.age = s.age;
            this.password = s.password;
            this.marks = s.marks != null ? s.marks.clone() : new int[3];
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student(); // Non-parameterized constructor
        System.out.println("Student Name: " + s1.name);
        System.out.println("Student Age: " + s1.age);
        System.out.println("Student Password: " + s1.password);
        System.out.println("Student Marks: " + Arrays.toString(s1.marks));

        Student s2 = new Student("Alice", 19); // Parameterized constructor
        System.out.println("\nStudent Name: " + s2.name);
        System.out.println("Student Age: " + s2.age);
        System.out.println("Student Password: " + s2.password);
        System.out.println("Student Marks: " + Arrays.toString(s2.marks));

        Student s3 = new Student(s2); // Copy constructor
        System.out.println("\nStudent Name: " + s3.name);
        System.out.println("Student Age: " + s3.age);
        System.out.println("Student Password: " + s3.password);
        System.out.println("Student Marks: " + Arrays.toString(s3.marks));
    }
}
