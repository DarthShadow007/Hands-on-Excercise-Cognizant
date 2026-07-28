# Spring Learn: REST & JWT Authentication

This project is a Spring Boot application built to demonstrate fundamental Spring REST web services, XML-based bean configuration, and JSON Web Token (JWT) authentication. It was developed as part of the Cognizant Spring hands-on exercises.

## 🚀 Features

* **XML Bean Configuration:** Loads initial data (Country beans) dynamically using `country.xml` and `@ImportResource`.
* **RESTful Web Services:** Provides endpoints to retrieve data as JSON.
* **Lambda Filtering:** Uses Java Streams and case-insensitive lambda expressions to search for specific countries by their country code.
* **Spring Security Configuration:** Implements a `SecurityFilterChain` to bypass default session states for specific testing endpoints.
* **JWT Generation:** Parses Base64 Basic Authentication headers and securely signs a JSON Web Token using the `jjwt` library and the `HS256` algorithm.

## 🛠️ Technologies Used

* **Java 21**
* **Spring Boot 3.2.0**
* **Spring Web**
* **Spring Security**
* **JJWT (io.jsonwebtoken)**
* **Maven**

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/hello` | Returns a simple "Hello World!!" string. |
| `GET` | `/country` | Returns the default India `Country` bean loaded from XML. |
| `GET` | `/countries/{code}` | Searches the XML-loaded list and returns a specific country (e.g., `/countries/de`). |
| `GET` | `/authenticate` | Accepts Basic Auth credentials and returns a securely signed JWT token. |

## 💻 How to Run and Test

1. Start the application by running `SpringLearnApplication.java` from your IDE.
2. The application will start on port `8083`.
3. You can test the standard REST endpoints in your browser:
   * `http://localhost:8083/hello`
   * `http://localhost:8083/countries/in`
4. **Testing JWT Authentication (Windows PowerShell):**
   Open your terminal and run the following command to receive your token:
   ```bash
   curl.exe -s -u user:pwd http://localhost:8083/authenticate