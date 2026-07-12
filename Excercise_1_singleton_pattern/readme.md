# Exercise 1: Implementing the Singleton Pattern

# 📖 Overview
This module demonstrates the implementation of the **Singleton Design Pattern** in Java. The Singleton pattern ensures that a class has only **one instance** throughout the entire application lifecycle while providing a global point of access to that instance.

# 🎯 Scenario
In enterprise software development, utility classes such as **logging utilities**, configuration managers, or database connection pools must maintain consistent state and prevent redundant memory allocation. Here, we build a centralized `Logger` class that guarantees a single shared logbook across the entire system.


# 🛠️ Implementation Details

# Core Principles Applied:
1. **Private Static Instance:** Holds the single referenced object of the class (`private static Logger instance;`).
2. **Private Constructor:** Prevents direct instantiation from outside classes (`new Logger()` is blocked).
3. **Public Static Accessor (`getInstance`):** Checks if an instance exists. If `null`, it initializes the instance; otherwise, it returns the existing reference.

# File Structure:
* `Logger.java` — The Singleton utility class containing the private constructor and `getInstance()` method.
* `SingletonPatternExample.java` — The verification driver class that requests multiple instances and checks memory address equality.

---

# 💻 Code Structure

```java
public class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("A new Logger instance was created!");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log entry: " + message);
    }
}