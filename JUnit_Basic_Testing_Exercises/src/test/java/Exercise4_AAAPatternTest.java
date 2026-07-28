import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

/**
 * Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures,
 * Setup and Teardown Methods in JUnit
 *
 * Scenario: Organize tests using the Arrange-Act-Assert (AAA) pattern
 * and use setup and teardown methods.
 *
 * Note: JUnit 5 renamed JUnit 4's @Before/@After to @BeforeEach/@AfterEach.
 * They serve the exact same purpose (setup before each test, cleanup after).
 */
public class Exercise4_AAAPatternTest {

    private Calculator calculator;

    // Setup: runs before every test method (test fixture creation)
    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setting up: new Calculator instance created.");
    }

    // Teardown: runs after every test method (test fixture cleanup)
    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Tearing down: Calculator instance discarded.");
    }

    @Test
    public void testAddition_usingAAAPattern() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction_usingAAAPattern() {
        // Arrange
        int a = 50;
        int b = 15;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(35, result);
    }

    @Test
    public void testDivisionByZero_usingAAAPattern() {
        // Arrange
        int a = 10;
        int b = 0;

        // Act & Assert
        assertThrows(ArithmeticException.class, () -> calculator.divide(a, b));
    }
}
