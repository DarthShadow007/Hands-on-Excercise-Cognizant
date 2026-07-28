package com.library.service;
import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Default constructor needed for Spring's Setter Injection
    public BookService() {}

    // Constructor Injection (Exercise 7)
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("⚙️ BookService initialized via Constructor Injection");
    }

    // Setter Injection (Exercise 2 & 7)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("⚙️ BookService updated via Setter Injection");
    }

    public void manageBooks() {
        System.out.println("📚 BookService: Managing library inventory...");
        bookRepository.displayBooks();
    }
}