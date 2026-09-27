public class MethodOverloadingDemo {
    static class Calculator {
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

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("add(int, int): " + calc.add(5, 10));
        System.out.println("add(double, double): " + calc.add(5.5, 10.2));
        System.out.println("add(float, float): " + calc.add(3.5f, 2.5f));
        System.out.println("add(int, int, int): " + calc.add(1, 2, 3));
    }
}
