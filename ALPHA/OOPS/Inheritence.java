package OOPS;

public class Inheritence {
    public static void main(String[] args) {
        Fish shark = new Fish();
        shark.eat();
        shark.breathe();
        shark.swim();
        Dog dobby = new Dog();
        dobby.eat();
        dobby.legs = 4;
        System.out.println("Dobby has " + dobby.legs + " legs");
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

// Derived class / subclass 
class Fish extends Animal{
    int fins;

    void swim(){
        System.out.println("Fish is swimming");
    }
}

class Mammls extends Animal{
    int legs;

    void run(){
        System.out.println("Mammal is running");
    }
}

class Dog extends Mammls{
    String breed;

    void bark(){
        System.out.println("Dog is barking");
    }
}