import java.util.Scanner;

public class IndianTaxCalculator2025 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your annual taxable income (₹): ");
        double income = sc.nextDouble();
        sc.close();

        double tax = calculateNewRegimeTax(income);

        System.out.printf("Estimated Tax (New Regime): ₹%.2f%n", tax);
    }

    // Calculates tax based on the new tax regime slabs for FY 2025–26
    public static double calculateNewRegimeTax(double income) {
        double tax = 0;

        if (income <= 400_000) {
            return 0; // No tax
        }
        if (income > 24_00_000) {
            tax += (income - 24_00_000) * 0.30;
            income = 24_00_000;
        }
        if (income > 20_00_000) {
            tax += (income - 20_00_000) * 0.25;
            income = 20_00_000;
        }
        if (income > 16_00_000) {
            tax += (income - 16_00_000) * 0.20;
            income = 16_00_000;
        }
        if (income > 12_00_000) {
            tax += (income - 12_00_000) * 0.15;
            income = 12_00_000;
        }
        if (income > 8_00_000) {
            tax += (income - 8_00_000) * 0.10;
            income = 8_00_000;
        }
        if (income > 4_00_000) {
            tax += (income - 4_00_000) * 0.05;
        }

        return tax;
    }
}
