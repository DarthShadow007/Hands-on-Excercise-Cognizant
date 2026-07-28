# Mockito Hands-On Exercises

Part of: **TDD using JUnit5 and Mockito**

A small Maven project demonstrating core Mockito concepts (mocking,
stubbing, and verifying interactions) using a simple `MyService` /
`ExternalApi` pair as the system under test.

## Exercises Covered

### Exercise 1: Mocking and Stubbing
**Scenario:** Test a service that depends on an external API. Use
Mockito to mock the external API and stub its methods.
**Solution:** `Exercise1_MockingAndStubbingTest.java` creates a mock of
`ExternalApi`, stubs `getData()` to return `"Mock Data"`, and asserts
that `MyService.fetchData()` returns that stubbed value.

### Exercise 2: Verifying Interactions
**Scenario:** Ensure that a method is called with specific arguments.
**Solution:** `Exercise2_VerifyingInteractionsTest.java` creates a mock,
calls `MyService.fetchData()`, and uses `verify()` to confirm
`ExternalApi.getData()` was actually invoked.

## Supporting Classes
- `ExternalApi.java` — an interface representing a third-party
  dependency, created so Mockito has something to mock.
- `MyService.java` — the class under test; depends on `ExternalApi` and
  delegates to it in `fetchData()`.

## Project Structure
```
Mockito_Exercises/
├── pom.xml
├── src/
│   ├── main/java/
│   │   ├── ExternalApi.java
│   │   └── MyService.java
│   └── test/java/
│       ├── Exercise1_MockingAndStubbingTest.java
│       └── Exercise2_VerifyingInteractionsTest.java
└── README.md
```

## Libraries Used
- JUnit 5 (Jupiter) — junit-jupiter-api, junit-jupiter-engine
- Mockito — mockito-core, mockito-junit-jupiter

## How to Run

**Using Maven from the terminal** (open a terminal inside this
`Mockito_Exercises` folder):
```bash
mvnd test
```
If your machine has Maven Daemon (`mvnd`) instead of plain Maven on its
PATH, use `mvnd test` instead — it works identically.

To run a single exercise's test class only:
```bash
mvn test -Dtest=Exercise1_MockingAndStubbingTest
mvn test -Dtest=Exercise2_VerifyingInteractionsTest
```

**Using VS Code directly:**
1. Install the "Extension Pack for Java" (Microsoft) if not already
   installed.
2. Open any test file (e.g. `Exercise1_MockingAndStubbingTest.java`).
3. Small gray "Run Test | Debug Test" text should appear directly above
   each `@Test`-annotated method — click "Run Test" to run just that one.
4. Full results also get written to `target/surefire-reports/` after
   running via Maven, one `.txt` report per test class.