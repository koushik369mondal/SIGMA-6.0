public class InheritanceDemo {
    // Base Class
    static class Animal {
        String color;

        void eat() {
            System.out.println("Animal is eating");
        }

        void breathe() {
            System.out.println("Animal is breathing");
        }
    }

    // Level 1: Derived Classes
    static class Fish extends Animal {
        int fins;

        void swim() {
            System.out.println("Fish is swimming");
        }
    }

    static class Mammal extends Animal {
        int legs;

        void walk() {
            System.out.println("Mammal is walking");
        }
    }

    static class Bird extends Animal {
        void fly() {
            System.out.println("Bird is flying");
        }
    }

    // Level 2: Multilevel & Hierarchical Inheritance
    static class Shark extends Fish {
        void hunt() {
            System.out.println("Shark is hunting");
        }
    }

    static class Dog extends Mammal {
        String breed;

        void bark() {
            System.out.println("Dog is barking");
        }
    }

    static class Peacock extends Bird {
        void dance() {
            System.out.println("Peacock is dancing");
        }
    }

    public static void main(String[] args) {
        Shark shark = new Shark();
        shark.eat();
        shark.breathe();
        shark.swim();
        shark.hunt();

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
