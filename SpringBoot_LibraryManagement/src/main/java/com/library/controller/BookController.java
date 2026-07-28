package com.library.controller;

import com.library.entity.Book;
import com.library.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Add a new book (POST Request)
    @PostMapping
    public Book addBook(@RequestBody Book book) {
        System.out.println("Adding book: " + book.getTitle());
        return bookRepository.save(book);
    }

    // View all books (GET Request)
    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
}