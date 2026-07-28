# Cognizant Hands-On Exercises — Software Engineering & Database Portfolio

## 📌 Repository Overview
Welcome to the **Cognizant Hands-On Exercises Repository**! This repository serves as a comprehensive portfolio of practical software engineering and database programming assignments designed to master **Core Java**, **Creational Design Patterns**, **Data Structures & Algorithms**, **Recursive Mathematical Modeling**, **Test-Driven Development (TDD) with JUnit5 & Mockito**, and **Oracle PL/SQL Database Administration**.

Each module is structured as an independent project demonstrating clean coding standards, object-oriented principles, relational database management, and performance optimization techniques.

---

## 🗂️ Repository Structure & Exercises

| Folder / Exercise | Topic / Module | Core Concepts Demonstrated | Key Files |
| :--- | :--- | :--- | :--- |
| **`Excercise_1_singleton_pattern`** | **Creational Design Patterns** | Singleton Pattern, Memory Reference Equality, Private Constructors, Static Accessors | `Logger.java`, `SingletonPatternExample.java` |
| **`Excercise_2_factory_Method`** | **Creational Design Patterns & Algorithms** | Factory Method Pattern, Polymorphism, Big O Notation, Linear Search vs. Binary Search | `FactoryMethodPatternExample.java`, `SearchExample.java` |
| **`Excercise_7_financial_forecasting`** | **Algorithms & Mathematical Modeling** | Recursive Compounding Algorithms, Time/Space Complexity Analysis, Memoization (`HashMap` Caching) | `FinancialForecasting.java` |
| **`Plsql_Excercises_Excercise_1`** | **PL/SQL Control Structures** | Explicit Cursors, Cursor FOR Loops, Conditional `IF-THEN` Business Logic, Server Output Logging | `ControlStructures.sql`, `README.md` |
| **`Exercise_3_Stored_Procedures`** | **PL/SQL Stored Procedures** | Modular Database Programming, Row-Level Locking (`FOR UPDATE`), Parameterized Procedures, Transaction ACID Control (`COMMIT`/`ROLLBACK`), Custom Exception Handling | `StoredProcedures.sql`, `Test_StoredProcedures.sql`, `README.md` |
| **`JUnit_Basic_Testing_Exercises`** | **TDD using JUnit5 and Mockito** | JUnit 5 Setup, Assertions (assertEquals, assertTrue, assertNull, etc.), Arrange-Act-Assert Pattern, Test Fixtures (`@BeforeEach`/`@AfterEach`) | `Calculator.java`, `Exercise1_SetupTest.java`, `Exercise3_AssertionsTest.java`, `Exercise4_AAAPatternTest.java` |
| **`Mockito_Exercises`** | **TDD using JUnit5 and Mockito** | Mocking & Stubbing (`Mockito.mock`, `when().thenReturn()`), Verifying Interactions (`verify()`) | `ExternalApi.java`, `MyService.java`, `Exercise1_MockingAndStubbingTest.java`, `Exercise2_VerifyingInteractionsTest.java` |

---

## 🛠️ Technology Stack & Environment
* **Languages:** Java (JDK 21) & Oracle PL/SQL
* **Build Tool:** Apache Maven (`mvn` / `mvnd`) for the JUnit and Mockito modules
* **Testing Frameworks:** JUnit 5 (Jupiter), Mockito
* **IDE / Editor:** Visual Studio Code (with Microsoft Extension Pack for Java & PL/SQL Syntax Highlighting) / Oracle SQL Developer
* **Runtime / Engines:** Standard Java Virtual Machine (`java`) & Oracle Database Engine (Oracle Live SQL / SQLFiddle)
* **Version Control:** Git & GitHub

---

## 🚀 Quick Start & Setup Guide

### 1. Prerequisites
* **For Java Modules:** Ensure you have the **Java Development Kit (JDK 21)** installed and configured in your system environment variables (`JAVA_HOME` and `PATH`).
* **For Maven-based Modules (JUnit/Mockito):** Ensure Maven (`mvn`) or Maven Daemon (`mvnd`) is installed and available on your `PATH`.
* **For PL/SQL Modules:** Access an Oracle Database environment such as Oracle SQL Developer, [Oracle Live SQL](https://livesql.oracle.com/), or [SQLFiddle](http://sqlfiddle.com).

### 2. Opening in VS Code
1. Clone or download this repository to your local machine.
2. Open **Visual Studio Code** and select `File > Open Folder...` to open the root folder (`HANDS ON EXCERCISE COGNIZANT`).
3. Allow the extensions to initialize workspace build paths and syntax highlighting.

### 3. Running Individual Modules
* **Plain Java Exercises** (e.g. `Excercise_1_singleton_pattern`, `Excercise_2_factory_Method`, `Excercise_7_financial_forecasting`): Open the driver class containing the `main` method and click the clickable **Run** link appearing directly above the line definition.
* **Maven-based Java Exercises** (`JUnit_Basic_Testing_Exercises`, `Mockito_Exercises`): Open a terminal inside the specific module folder and run:
  ```bash
  mvn test
  ```
  (or `mvnd test` if using Maven Daemon). Each module's own `README.md` has more detail, including how to run a single test class.
* **PL/SQL Exercises:** Run `SET SERVEROUTPUT ON;` in your Oracle SQL compiler, execute table creation scripts, and run the `.sql` blocks to view database state updates and console logs.

---

## ⚙️ Troubleshooting & VS Code Tips
* **Java Build Path Errors:** If you encounter `Project missing required source folder` after renaming folders, open the Command Palette (`Ctrl + Shift + P`), select **`Java: Clean Java Language Server Workspace`**, and click **Restart and Delete**.
* **"Declared package does not match expected package" errors:** VS Code sometimes auto-inserts a `package ...;` line at the top of a new `.java` file based on its folder path. The modules in this repository intentionally use a flat structure with no package declarations — delete any auto-inserted `package ...;` line from the top of a file if this error appears.
* **`mvn`/`mvnd` command not found in terminal:** Confirm Maven (or Maven Daemon) is on your system `PATH`, then fully close and reopen VS Code so the terminal picks up the updated `PATH`.
* **PL/SQL Plain Text Display:** If `.sql` files appear without color highlighting, install the **PL/SQL Syntax Highlighting** extension from the VS Code marketplace.

---

## 👨‍💻 Author & Attribution
Developed as part of the **Cognizant Hands-On Technical Training & Engineering Portfolio**.