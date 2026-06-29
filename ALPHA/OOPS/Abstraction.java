package OOPS;

public class Abstraction {

    public static void main(String[] args) {

        // Horse Object
        Horse h = new Horse();
        h.eat();
        h.walk();
        System.out.println("Horse Color: " + h.color);

        h.changeColor();
        System.out.println("Horse New Color: " + h.color);

        System.out.println();

        // Chicken Object
        Chicken c = new Chicken();
        c.eat();
        c.walk();
        System.out.println("Chicken Color: " + c.color);

        c.changeColor();
        System.out.println("Chicken New Color: " + c.color);

        System.out.println();

        // Multilevel Inheritance
        // Animal -> Horse -> Mustang
        Mustang m = new Mustang();
        m.eat();
        m.walk();
        System.out.println("Mustang Color: " + m.color);

        m.changeColor();
        System.out.println("Mustang New Color: " + m.color);
    }
}

// ===================================================
// Abstract Parent Class
// ===================================================

abstract class Animal {

    String color;

    Animal() {
        color = "brown";
        System.out.println("Animal constructor called");
    }

    void eat() {
        System.out.println("Animal eats");
    }

    abstract void walk();
}

// ===================================================
// Horse Class
// ===================================================

class Horse extends Animal {

    Horse() {
        System.out.println("Horse constructor called");
    }

    void changeColor() {
        color = "black brown";
    }

    @Override
    void walk() {
        System.out.println("Horse walks on 4 legs");
    }
}

// ===================================================
// Chicken Class
// ===================================================

class Chicken extends Animal {

    void changeColor() {
        color = "white";
    }

    @Override
    void walk() {
        System.out.println("Chicken walks on 2 legs");
    }
}

// ===================================================
// Mustang Class (Multilevel Inheritance)
// Animal -> Horse -> Mustang
// ===================================================

class Mustang extends Horse {

    Mustang() {
        System.out.println("Mustang constructor called");
    }

    @Override
    void changeColor() {
        color = "black";
    }
}