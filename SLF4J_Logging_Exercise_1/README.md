# SLF4J Exercise 1: Logging Error Messages and Warning Levels

## 📖 Overview
This module demonstrates the fundamental implementation of the **Simple Logging Facade for Java (SLF4J)** combined with the **Logback** implementation. It serves as an introduction to enterprise-level application monitoring and debugging practices.

## 🎯 Objectives
* Configure a Maven build environment using a `pom.xml` file.
* Inject external logging dependencies (`slf4j-api` and `logback-classic`).
* Instantiate a thread-safe static logger instance.
* Output messages using distinct logging severity levels (`ERROR` and `WARN`).

## 🛠️ Technology Stack
* **Java:** JDK 21+
* **Build Tool:** Apache Maven
* **Logging Facade:** SLF4J (v1.7.30)
* **Logging Implementation:** Logback Classic (v1.2.3)

## 🚀 Execution & Output
Upon executing the `main` method in `LoggingExample.java`, the Logback engine processes the SLF4J API calls and formats them to the standard console output:

```text
15:45:12.123 [main] ERROR LoggingExample - This is an error message
15:45:12.126 [main] WARN  LoggingExample - This is a warning message