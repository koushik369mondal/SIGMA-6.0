package OOPS;

public class CopyConstructor {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Sahil";
        s1.roll = 12;
        s1.marks[0] = 100;
        s1.marks[1] = 90;
        s1.marks[2] = 80;

        // Student s2 = new Student(s1); // shallow copy
        Student s2 = new Student(s1); // deep copy

        s2.marks[2] = 100;

        for(int i=0; i<3; i++){
            System.out.println(s1.marks[i]);
        }
    }
}

class Student {
    String name;
    int roll;
    String password;
    int marks[];

    // shallow copy constructor
    // Student(Student s1){
    //     marks = new int[3];
    //     this.name = s1.name;
    //     this.roll = s1.roll;
    //     this.marks = s1.marks;
    // }

    // deep copy constructor
    Student(Student s1){
        marks = new int[3];
        this.name = s1.name;
        this.roll = s1.roll;
        for(int i=0; i<marks.length; i++){
            this.marks[i] = s1.marks[i];
        }
    }

    Student(){
        marks = new int[3];
        System.out.println("Deep Copy Constructor");
    }

    // lazy copy constructor
    Student(Student s1, boolean isDeep){
        if(isDeep){
            marks = new int[3];
            this.name = s1.name;
            this.roll = s1.roll;
            for(int i=0; i<marks.length; i++){
                this.marks[i] = s1.marks[i];
            }
        } else {
            marks = new int[3];
            this.name = s1.name;
            this.roll = s1.roll;
            this.marks = s1.marks;
        }
    }
}
