package Excercise_7_financial_forecasting;

import java.util.HashMap;
import java.util.Map;

public class FinancialForecasting {

    private static Map<Integer, Double> memo = new HashMap<>();

    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static double calculateFutureValueOptimized(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        if (memo.containsKey(years)) {
            return memo.get(years);
        }
        double result = calculateFutureValueOptimized(presentValue, growthRate, years - 1) * (1 + growthRate);
        memo.put(years, result);
        return result;
    }

    public static void main(String[] args) {
        double initialAmount = 10000.0;
        double annualGrowthRate = 0.08;
        int targetYears = 10;

        System.out.println("--- Financial Forecasting Tool ---");

        double futureValue = calculateFutureValue(initialAmount, annualGrowthRate, targetYears);
        System.out.printf("Standard Recursive Forecast (10 Years): $%.2f%n", futureValue);

        double optimizedValue = calculateFutureValueOptimized(initialAmount, annualGrowthRate, targetYears);
        System.out.printf("Optimized Forecast (10 Years): $%.2f%n", optimizedValue);
    }
}