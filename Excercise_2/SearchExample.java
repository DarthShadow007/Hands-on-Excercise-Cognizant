package Excercise_2;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class SearchExample {

    // Linear Search Implementation
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p; // Found it!
            }
        }
        return null; // Not found
    }

    // Binary Search Implementation (Requires Sorted Array)
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid]; // Found it!
            }
            if (products[mid].productId < targetId) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        return null; // Not found
    }

    public static void main(String[] args) {
        // Step 3: Store products in an array (Sorted by ID for Binary Search)
        Product[] catalog = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Electronics"),
            new Product(103, "Desk", "Furniture"),
            new Product(104, "Chair", "Furniture")
        };

        System.out.println("--- Testing Searches ---");
        
        Product foundLinear = linearSearch(catalog, 103);
        System.out.println("Linear Search Found: " + (foundLinear != null ? foundLinear.productName : "Not found"));

        Product foundBinary = binarySearch(catalog, 104);
        System.out.println("Binary Search Found: " + (foundBinary != null ? foundBinary.productName : "Not found"));
    }
}