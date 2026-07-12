# Exercise 7: Financial Forecasting Tool (Recursive Algorithms)

# 📖 Overview
This module explores **Recursive Algorithms** and **Memoization (Caching)** by building a financial forecasting tool designed to predict future compound investment values based on historical growth rates.

# 🎯 Scenario
Financial analysts require tools to project future capital valuation over extended time horizons. Rather than writing iterative loops, recursion allows us to express compound interest elegantly by relating future capital directly to prior year valuation:
$$FV_n = FV_{n-1} \times (1 + r)$$



# 🛠️ Algorithm & Mathematical Modeling

# 1. Base Case & Recursive Step
* **Base Case:** When `years == 0`, the recursion terminates and returns the initial `presentValue`.
* **Recursive Step:** For any year $n > 0$, the function computes the valuation of year $n-1$ and multiplies it by the annual growth factor $(1 + \text{growthRate})$.

# 2. Complexity Analysis & Optimization
* **Standard Recursion Time Complexity:** **$O(n)$** — Executes exactly $n$ sequential stack calls.
* **Standard Space Complexity:** **$O(n)$** — Each call occupies memory on the call stack until the base case resolves.
* **Optimization via Memoization:** To prevent excessive re-computation across overlapping financial scenarios, we implement a caching mechanism (`HashMap<Integer, Double> memo`). When a year's forecast is computed once, it is stored; subsequent lookups execute in **$O(1)$** constant time.



# 💻 Code Highlights

```java
// Optimized Recursive Forecasting with Memoization
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


    --- Financial Forecasting Tool ---
Standard Recursive Forecast (10 Years): $21589.25
Optimized Forecast (10 Years): $21589.25