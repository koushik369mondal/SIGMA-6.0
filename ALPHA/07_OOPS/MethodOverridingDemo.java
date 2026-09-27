public class MethodOverridingDemo {
    static class Animal {
        void eat() {
            System.out.println("Animal is eating");
        }
    }

    static class Deer extends Animal {
        @Override
        void eat() {
            System.out.println("Deer is eating grass");
        }
    }

    public static void main(String[] args) {
        Deer d = new Deer();
        d.eat(); // Calls overridden method in Deer

        Animal a = new Animal();
        a.eat(); // Calls base class method
    }
}
