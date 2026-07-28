# orm-learn (Hands-on 1)

A Spring Boot application demonstrating ORM persistence using **Spring Data JPA**, **Hibernate**, and **H2 In-Memory Database**.

---

## 📌 Features Covered

* Mapping relational database tables to Java domain entities (`Country`).
* Extending `JpaRepository` interface for zero-boilerplate CRUD operations.
* Configuring Spring Boot database properties and logging levels.
* Automatic schema creation and SQL script execution (`data.sql`).

---

## 📂 Project Architecture

```text
orm-learn/
├── pom.xml
├── README.md
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── cognizant/
        │           └── ormlearn/
        │               ├── OrmLearnApplication.java   # Main Runner
        │               ├── model/
        │               │   └── Country.java           # JPA Entity
        │               ├── repository/
        │               │   └── CountryRepository.java # JpaRepository Interface
        │               └── service/
        │                   └── CountryService.java    # Business Logic Layer
        └── resources/
            ├── application.properties                 # App & DB Config
            └── data.sql                               # Initial Seed Data

            Hibernate: create table country (code varchar(255) not null, name varchar(255), primary key (code))
...
Started OrmLearnApplication in 4.563 seconds
...
Inside main
Start
Hibernate: select c1_0.code,c1_0.name from country c1_0
End