package OOPS;

public class Inheritence {
    public static void main(String[] args) {

        Shark shark = new Shark();
        shark.eat();
        shark.breathe();
        shark.swim();

        System.out.println();

        Dog dobby = new Dog();
        dobby.eat();
        dobby.walk();
        dobby.bark();
        dobby.legs = 4;
        System.out.println("Dobby has " + dobby.legs + " legs");

        System.out.println();

        Peacock peacock = new Peacock();
        peacock.eat();
        peacock.fly();
        peacock.dance();
    }
}

// ================= Base Class =================

class Animal {
    String color;

    void eat() {
        System.out.println("Animal is eating");
    }

    void breathe() {
        System.out.println("Animal is breathing");
    }
}

// ================= Level 1 =================

class Fish extends Animal {
    int fins;

    void swim() {
        System.out.println("Fish is swimming");
    }
}

class Mammal extends Animal {
    int legs;

    void walk() {
        System.out.println("Mammal is walking");
    }
}

class Bird extends Animal {

    void fly() {
        System.out.println("Bird is flying");
    }
}

// ================= Level 2 =================

class Shark extends Fish {

    void hunt() {
        System.out.println("Shark is hunting");
    }
}

class Dog extends Mammal {
    String breed;

    void bark() {
        System.out.println("Dog is barking");
    }
}

class Peacock extends Bird {

    void dance() {
        System.out.println("Peacock is dancing");
    }
}