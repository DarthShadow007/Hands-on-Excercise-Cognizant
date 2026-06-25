package Excercise_2;

// Step 2: Define Document Classes (Interface)
interface Document {
    void open();
}

// Step 3: Create Concrete Document Classes
class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document... (.docx)");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document... (.pdf)");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel Spreadsheet... (.xlsx)");
    }
}

// Step 4: Implement the Factory Method (Abstract Creator)
abstract class DocumentFactory {
    // This is the Factory Method!
    public abstract Document createDocument();
    
    // A helper method to create and immediately open
    public void processDocument() {
        Document doc = createDocument();
        doc.open();
    }
}

// Step 5a: Create Concrete Factory Classes
class WordFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}

// Step 5b: Test the Implementation
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        System.out.println("--- Document Management System ---");

        // We want a PDF. We don't create a PDF directly; we use the Factory!
        DocumentFactory myPdfFactory = new PdfFactory();
        Document myDoc1 = myPdfFactory.createDocument();
        myDoc1.open();

        // We want an Excel file.
        DocumentFactory myExcelFactory = new ExcelFactory();
        Document myDoc2 = myExcelFactory.createDocument();
        myDoc2.open();
    }
}