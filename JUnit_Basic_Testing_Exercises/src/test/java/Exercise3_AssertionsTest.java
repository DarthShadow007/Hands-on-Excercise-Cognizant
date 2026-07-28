import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Exercise 3: Assertions in JUnit
 *
 * Scenario: Use different assertions in JUnit to validate test results.
 *
 * Note: the original exercise sheet's solution code used JUnit 4 syntax
 * (org.junit.Test / org.junit.Assert). It has been translated to JUnit 5
 * (org.junit.jupiter.api) to match this project's setup.
 */
public class Exercise3_AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
    }
}