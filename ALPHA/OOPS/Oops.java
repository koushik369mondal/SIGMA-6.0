package OOPS;

public class Oops {
    public static void main(String[] args) {
    //     Pen pen1 = new Pen();
    //     pen1.setColor("Blue");
    //     pen1.setTip(5);
    //     System.out.println("Pen Color: " + pen1.getColor());
    //     System.out.println("Pen Tip Size: " + pen1.getTip());

    //     Student student1 = new Student();
    //     student1.name = "John";
    //     student1.age = 20;
    //     student1.calcPercentage(85, 90, 80);
    //     System.out.println("Student Name: " + student1.name);
    //     System.out.println("Student Age: " + student1.age);
    //     System.out.println("Student Percentage: " + student1.percentage);
    
        Student1 student2 = new Student1("Alice", 22);
        student2.calcPercentage(90, 85, 95);
        System.out.println("Student Name: " + student2.name);
        System.out.println("Student Age: " + student2.age);
        System.out.println("Student Percentage: " + student2.percentage);
    }
}

class Pen {
    private String color;
    private int tip;

    public void setColor(String color) {
        this.color = color;
    }

    public void setTip(int tip) {
        this.tip = tip;
    }

    public String getColor() {
        return this.color;
    }

    public int getTip() {
        return this.tip;
    }
}

class Student {
    String name;
    int age;
    float percentage;

    void calcPercentage(int phy, int chem, int math) {
        percentage = (phy + chem + math) / 3;
    }
}

// constructors
class Student1 {
    String name;
    int age;
    float percentage;

    // Constructor
    Student1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void calcPercentage(int phy, int chem, int math) {
        percentage = (phy + chem + math) / 3;
    }
}
