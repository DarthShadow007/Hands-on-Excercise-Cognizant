/**
 * Represents a third-party/external API that MyService depends on.
 * In a real application this might make an HTTP call, query a database,
 * etc. For these exercises it only needs to exist as an interface so
 * Mockito can create a mock of it.
 */
public interface ExternalApi {
    String getData();
}