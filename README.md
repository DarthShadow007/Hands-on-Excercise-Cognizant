# Cognizant Hands-On Exercises — Software Engineering & Database Portfolio

## 📌 Repository Overview
Welcome to the **Cognizant Hands-On Exercises Repository**! This repository serves as a comprehensive portfolio of practical software engineering and database programming assignments designed to master **Core Java**, **Creational Design Patterns**, **Data Structures & Algorithms**, **Recursive Mathematical Modeling**, **Test-Driven Development (TDD) with JUnit5 & Mockito**, **Enterprise Spring Framework (Core & Boot)**, **Spring Data JPA & ORM**, **Spring REST & JWT Authentication**, and **Oracle PL/SQL Database Administration**.

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
| **`SLF4J_Logging_Exercise_1`** | **Enterprise Logging** | Maven Dependencies (`pom.xml`), SLF4J API, Logback Implementation, Warning & Error Severity Levels | `LoggingExample.java`, `pom.xml` |
| **`Spring_Core_LibraryManagement`** | **Spring Framework (Core)** | Inversion of Control (IoC), Dependency Injection (Constructor & Setter), XML Configuration (`applicationContext.xml`), Bean Lifecycles | `pom.xml`, `BookService.java`, `applicationContext.xml` |
| **`SpringBoot_LibraryManagement`** | **Spring Boot & REST APIs** | Auto-configuration, Spring Data JPA, Embedded H2 Database, RESTful Endpoints (`@RestController`, `@GetMapping`, `@PostMapping`), Embedded Tomcat | `pom.xml`, `application.properties`, `BookController.java` |
| **`orm-learn`** | **Spring Data JPA & ORM** | Object-Relational Mapping (ORM), `JpaRepository`, Entity Mapping (`@Entity`), H2/MySQL Integration, Data Seeding (`data.sql`), Transaction Management (`@Transactional`) | `pom.xml`, `application.properties`, `Country.java`, `CountryRepository.java`, `CountryService.java`, `OrmLearnApplication.java` |
| **`HANDSON_4_JPA_VS_HIBERNATE.md`** | **Spring Data JPA & Architecture** | Architectural comparison between JPA (Specification), Hibernate (ORM Provider), and Spring Data JPA (Abstraction Layer) | `HANDSON_4_JPA_VS_HIBERNATE.md` |
| **`spring-learn`** | **Spring REST & JWT Authentication** | XML Bean Configuration (`@ImportResource`), Spring REST Endpoints (`@RestController`), Stream/Lambda Case-Insensitive Search, Basic Authentication Parsing, Cryptographic JWT Generation (`io.jsonwebtoken`) | `SpringLearnApplication.java`, `CountryController.java`, `CountryService.java`, `AuthenticationController.java`, `SecurityConfig.java`, `country.xml` |

---

## 🛠️ Technology Stack & Environment
* **Languages:** Java (JDK 21) & Oracle PL/SQL
* **Frameworks & Libraries:** Spring Core, Spring Boot, Spring WebMVC, Spring Security, Spring Data JPA, Hibernate, JJWT (`io.jsonwebtoken`)
* **Build Tool:** Apache Maven (`mvn` / `mvnd`)
* **Testing Frameworks:** JUnit 5 (Jupiter), Mockito
* **Databases:** Oracle Database, H2 (In-Memory Embedded Database), MySQL 8.0
* **IDE / Editor:** Visual Studio Code (with Microsoft Extension Pack for Java & PL/SQL Syntax Highlighting) / Oracle SQL Developer
* **Runtime / Engines:** Standard Java Virtual Machine (`java`), Embedded Apache Tomcat, & Oracle Database Engine
* **Version Control:** Git & GitHub

---

## 🚀 Quick Start & Setup Guide

### 1. Prerequisites
* **For Java Modules:** Ensure you have the **Java Development Kit (JDK 21)** installed and configured in your system environment variables (`JAVA_HOME` and `PATH`).
* **For Maven-based Modules:** Ensure Maven (`mvn`) or Maven Daemon (`mvnd`) is installed and available on your `PATH`.
* **For PL/SQL Modules:** Access an Oracle Database environment such as Oracle SQL Developer, [Oracle Live SQL](https://livesql.oracle.com/), or [SQLFiddle](http://sqlfiddle.com).

### 2. Opening in VS Code
1. Clone or download this repository to your local machine.
2. Open **Visual Studio Code** and select `File > Open Folder...` to open the root folder (`HANDS ON EXCERCISE COGNIZANT`).
3. Allow the extensions to initialize workspace build paths and syntax highlighting.

### 3. Running Individual Modules
* **Plain Java Exercises**: Open the driver class containing the `main` method and click the clickable **Run** link appearing directly above the line definition.
* **Maven-based Unit Testing & Spring Exercises** (`JUnit_Basic_Testing_Exercises`, `Mockito_Exercises`, `spring-learn`): Open a terminal inside the specific module folder and run:
  ```bash
  mvn test