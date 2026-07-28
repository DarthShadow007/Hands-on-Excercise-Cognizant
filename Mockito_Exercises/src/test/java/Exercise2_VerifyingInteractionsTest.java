import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

/**
 * Exercise 2: Verifying Interactions
 *
 * Scenario: Ensure that a method is called with specific arguments.
 *
 * Steps:
 * 1. Create a mock object.
 * 2. Call the method with specific arguments.
 * 3. Verify the interaction.
 */
public class Exercise2_VerifyingInteractionsTest {

    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}