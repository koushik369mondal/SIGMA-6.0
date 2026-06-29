package OOPS;

public class MethodOverloading {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10)); //int
        System.out.println(calc.add(5.5, 10.2)); //double
        System.out.println(calc.add(3.5f, 2.5f)); //float
        System.out.println(calc.add(1, 2, 3)); //int
    }
}

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public float add(float a, float b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
