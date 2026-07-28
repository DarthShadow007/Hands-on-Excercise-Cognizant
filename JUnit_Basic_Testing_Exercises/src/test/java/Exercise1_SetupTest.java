import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Exercise 1: Setting Up JUnit
 *
 * Scenario: Set up JUnit in a Java project to start writing unit tests.
 *
 * This test proves the JUnit 5 setup (declared in pom.xml) is working
 * correctly by running one simple test against the Calculator class.
 */
public class Exercise1_SetupTest {

    @Test
    public void testJUnitIsSetUpCorrectly() {
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, result, "JUnit setup check: 2 + 3 should equal 5");
    }
}