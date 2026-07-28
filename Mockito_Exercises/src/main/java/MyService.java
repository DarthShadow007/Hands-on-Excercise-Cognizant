package Mockito_Exercises.src.main.java;

/**
 * A service that depends on ExternalApi. This is the "system under test"
 * for the Mockito Hands-On Exercises (Exercise 1 and 2).
 */
public class MyService {

    private final ExternalApi externalApi;

    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }
}