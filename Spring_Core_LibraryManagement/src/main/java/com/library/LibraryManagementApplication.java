package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load the Spring IoC Container
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService Bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Test the configuration
        System.out.println("\n--- Application Output ---");
        bookService.manageBooks();
    }
}