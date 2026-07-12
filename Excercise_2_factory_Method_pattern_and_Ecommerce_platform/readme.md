# Exercise 2: E-commerce Search Function & Factory Method Pattern

# 📖 Overview
This module covers two distinct core software engineering exercises under **Exercise 2**:
1. **Algorithmic Optimization:** Implementing fast e-commerce catalog search using **Linear Search** and **Binary Search**, accompanied by Asymptotic Notation (Big O) analysis.
2. **Creational Design Patterns:** Implementing the **Factory Method Pattern** to build a modular Document Management System capable of generating Word, PDF, and Excel documents dynamically.

---

# Part A: E-commerce Platform Search Function

# 🎯 Scenario
An e-commerce platform requires high-performance catalog searching. As product inventories scale to millions of items, selecting the optimal search algorithm becomes critical for minimizing server latency and ensuring responsive user UX.

# 📐 Asymptotic Notation (Big O Analysis)
* **Linear Search ($O(n)$):** Scans elements sequentially from start to finish.
  * *Best Case:* $O(1)$ — Target is at the first index.
  * *Worst Case:* $O(n)$ — Target is at the last index or non-existent.
* **Binary Search ($O(\log n)$):** Requires a **sorted array**. Continually divides the search space in half by comparing the target with the middle element.
  * *Best Case:* $O(1)$ — Target is exactly at the midpoint.
  * *Worst Case:* $O(\log n)$ — Extremely efficient; searching 1,000,000 items takes at most ~20 comparisons.

# 💡 Platform Recommendation
For an e-commerce platform, **Binary Search ($O(\log n)$)** is vastly superior for structured, sorted product catalogs, reducing search latency exponentially compared to Linear Search.



# Part B: Implementing the Factory Method Pattern

# 🎯 Scenario
A document management system needs to instantiate various document types (`WordDocument`, `PdfDocument`, `ExcelDocument`) without coupling the client application to specific concrete classes.

# 🛠️ Implementation Structure
* **`Document` (Interface):** Defines the common behavior (`open()`).
* **Concrete Documents:** `WordDocument`, `PdfDocument`, and `ExcelDocument` implementing `Document`.
* **`DocumentFactory` (Abstract Creator):** Declares the abstract factory method `createDocument()`.
* **Concrete Factories:** `WordFactory`, `PdfFactory`, and `ExcelFactory` instantiate specific document objects cleanly.

---

# 🚀 How to Run
1. Navigate to the `Excercise_2` folder in VS Code.
2. For Algorithmic Search: Open `SearchExample.java` and click **Run**.
3. For Factory Method: Open `FactoryMethodPatternExample.java` and click **Run**.

---

# 📊 Expected Output

# Algorithmic Search Output (`SearchExample.java`):
```text
--- Testing Searches ---
Linear Search Found: Desk
Binary Search Found: Chair

--- Document Management System ---
Opening PDF Document... (.pdf)
Opening Excel Spreadsheet... (.xlsx)