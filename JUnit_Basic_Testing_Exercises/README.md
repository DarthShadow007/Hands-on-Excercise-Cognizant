# JUnit Basic Testing Exercises

Part of: **TDD using JUnit5 and Mockito**

A small Maven project demonstrating core JUnit 5 concepts using a simple
`Calculator` class as the system under test.

## Exercises Covered

### Exercise 1: Setting Up JUnit
**Scenario:** Set up JUnit in a Java project to start writing unit tests.
**Solution:** JUnit 5 (Jupiter) is declared as a test-scope dependency in
`pom.xml`. `Exercise1_SetupTest.java` contains a basic test that confirms
the setup works correctly.

### Exercise 3: Assertions in JUnit
**Scenario:** Use different assertions in JUnit to validate test results.
**Solution:** `Exercise3_AssertionsTest.java` demonstrates `assertEquals`,
`assertTrue`, `assertFalse`, `assertNull`, and `assertNotNull`.

### Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods
**Scenario:** Organize tests using the Arrange-Act-Assert (AAA) pattern
and use setup/teardown methods.
**Solution:** `Exercise4_AAAPatternTest.java` uses `@BeforeEach` and
`@AfterEach` for fixture setup/teardown, and structures each test method
with clear Arrange / Act / Assert sections.

## Project Structure
```
JUnit_Basic_Testing_Exercises/
├── pom.xml
├── src/
│   ├── main/java/Calculator.java
│   └── test/java/
│       ├── Exercise1_SetupTest.java
│       ├── Exercise3_AssertionsTest.java
│       └── Exercise4_AAAPatternTest.java
└── README.md
```

## Libraries Used
- JUnit 5 (Jupiter) — junit-jupiter-api, junit-jupiter-engine

## How to Run
```bash
mvn test
```
This compiles the project and runs all three test classes. To run a
single exercise's test class only:
```bash
mvn -Dtest=Exercise1_SetupTest test
mvn -Dtest=Exercise3_AssertionsTest test
mvn -Dtest=Exercise4_AAAPatternTest test
```
Or right-click any test class in VS Code / IntelliJ and choose
"Run Test" if you have a Java test runner extension installed.