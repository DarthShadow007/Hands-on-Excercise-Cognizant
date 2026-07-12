public class SingletonPatternExample {
    
    public static void main(String[] args) {
        
        System.out.println("--- Starting Application ---");

        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second message.");

        System.out.println("\n--- Testing the Instances ---");

        if (logger1 == logger2) {
            System.out.println("SUCCESS: logger1 and logger2 are the exact same instance!");
        } else {
            System.out.println("FAIL: Different instances were created.");
        }
    }
}
