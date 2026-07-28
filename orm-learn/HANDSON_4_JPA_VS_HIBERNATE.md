# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## 1. Core Architectural Differences

### Java Persistence API (JPA)
* **Type:** Specification (Standard)
* **Description:** JSR 338 Specification for persisting, reading, and managing data from Java objects.
* **Key Detail:** JPA contains interfaces and annotations (`@Entity`, `@Id`, `@Table`, etc.) but **does not contain any concrete implementation code**. 
* **Analogy:** JPA is like an interface in Java — it defines the rules, but someone else has to write the implementation class.

### Hibernate
* **Type:** ORM Framework / JPA Provider
* **Description:** An Object-Relational Mapping (ORM) tool that provides a concrete implementation of the JPA specification.
* **Key Detail:** Hibernate writes the low-level SQL queries, manages database sessions, handles database connections, and manages caching under the hood.

### Spring Data JPA
* **Type:** Abstraction Layer
* **Description:** A Spring Framework module that adds another layer of abstraction on top of JPA and Hibernate.
* **Key Detail:** It does not implement JPA itself. Instead, it drastically reduces boilerplate code by automatically generating database queries at runtime through simple repository interfaces (e.g., `JpaRepository`). It also manages transactions automatically.

---

## 2. Code Comparison

To demonstrate how **Spring Data JPA** simplifies code compared to standard **Hibernate**, look at the code required to perform a basic `CREATE` (Insert) operation for an `Employee` entity:

### A. Using Standard Hibernate (Boilerplate-Heavy)
With pure Hibernate, you must manually open sessions, manage transactions, write try-catch-finally blocks, handle manual rollbacks, and close sessions:

```java
/* Method to CREATE an employee in the database using pure Hibernate */
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace();
    } finally {
        session.close();
    }
    return employeeID;
}