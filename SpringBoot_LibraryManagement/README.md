# Library Management System - Spring Framework & Spring Boot

This repository contains the hands-on exercise solutions for the Spring Core and Spring Boot modules. The project demonstrates the evolution of a Library Management application, transitioning from traditional XML-based Spring Core configuration to a modern, auto-configured Spring Boot REST API.

## 📂 Project Structure

The repository is divided into two distinct Maven projects to separate the different framework architectures:

### 1. `Spring_Core_LibraryManagement` (Exercises 1-7)
Demonstrates the foundational concepts of the Spring Framework (Inversion of Control and Dependency Injection).
* **Tech Stack:** Java 8, Maven, Spring Context, Spring AOP, Spring WebMVC.
* **Key Concepts Implemented:**
  * Bean creation and wiring using `applicationContext.xml`.
  * Dependency Injection (Constructor Injection & Setter Injection).
  * Separation of concerns (Repository and Service layers).

### 2. `SpringBoot_LibraryManagement` (Exercise 9)
Upgrades the application to a fully functional RESTful web service using modern Spring Boot conventions.
* **Tech Stack:** Java 21, Maven, Spring Boot, Spring Data JPA, H2 In-Memory Database, Tomcat.
* **Key Concepts Implemented:**
  * Auto-configuration using `@SpringBootApplication`.
  * Entity mapping and database operations using `JpaRepository`.
  * REST API endpoint creation using `@RestController`.

---

## 🚀 How to Run the Applications

### Running the Spring Core Application
This module runs as a standard Java console application.
1. Navigate to the `Spring_Core_LibraryManagement` directory.
2. Ensure Maven has downloaded all dependencies specified in the `pom.xml`.
3. Run `LibraryManagementApplication.java`.
4. **Expected Output:** The console will print initialization logs confirming both Constructor and Setter injections, followed by the successful retrieval of books from the mock database.

### Running the Spring Boot Application
This module spins up an embedded Tomcat web server and an H2 database.
1. Navigate to the `SpringBoot_LibraryManagement` directory.
2. Run `LibraryManagementApplication.java`.
3. Wait for the console to display `Tomcat started on port 8080`.
4. The API is now live and waiting for requests.

---

## 🌐 Spring Boot API Endpoints

Once the Spring Boot server is running on `http://localhost:8080`, you can interact with the database using the following endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/books` | Retrieves a JSON array of all books in the database. |
| **POST** | `/books` | Adds a new book to the database. |

### Example: Adding a Book (PowerShell)
To populate the empty database, execute the following command in a new terminal window:
```powershell
Invoke-RestMethod -Uri "http://localhost:8080/books" -Method Post -Body '{"title": "The Hobbit", "author": "J.R.R. Tolkien"}' -ContentType "application/json"