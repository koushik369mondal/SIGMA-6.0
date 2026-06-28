package OOPS;

public class Inheritence {
    public static void main(String[] args) {
        Fish shark = new Fish();
        shark.eat();
        shark.breathe();
        shark.swim();
    }
}

// Base class
class Animal{
    String color;

    void eat(){
        System.out.println("Animal is eating");
    }

    void breathe(){
        System.out.println("Animal is breathing");
    }
}

// Derived class
class Fish extends Animal{
    int fins;

    void swim(){
        System.out.println("Fish is swimming");
    }
}
