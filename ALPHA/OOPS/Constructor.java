package OOPS;

public class Constructor {
    public static void main(String[] args) {
        Student1 s1 = new Student1(); // Non-parameterized constructor
        System.out.println("Student Name: " + s1.name);
        System.out.println("Student Age: " + s1.age);
        System.out.println("Student Password: " + s1.password);
        System.out.println("Student Marks: " + java.util.Arrays.toString(s1.marks));

        Student1 s3 = new Student1("Alice", 19); // Parameterized constructor
        System.out.println("Student Name: " + s3.name);
        System.out.println("Student Age: " + s3.age);
        System.out.println("Student Password: " + s3.password);
        System.out.println("Student Marks: " + java.util.Arrays.toString(s3.marks));

        Student1 s4 = new Student1(s3); // Copy constructor
        System.out.println("Student Name: " + s4.name);
        System.out.println("Student Age: " + s4.age);
        System.out.println("Student Password: " + s4.password);
        System.out.println("Student Marks: " + java.util.Arrays.toString(s4.marks));
    }

    // constructors
    static class Student1 {
        String name;
        int age;
        String password;
        int marks[];

        // Non-parameterized constructor
        Student1() {
            this.name = "Default Name";
            this.age = 18;
            this.password = "defaultPassword";
            this.marks = new int[3];
        }

        // Parameterized constructor
        Student1(String name, int age) {
            this.name = name;
            this.age = age;
        }

        // Copy constructor
        Student1(Student1 s) {
            this.name = s.name;
            this.age = s.age;
        }
    }
}
