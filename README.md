# Spring Boot with React

A full-stack application built with Spring Boot backend and React frontend.

## Technologies Used

### Backend
- **Spring Boot 4.0.0** - Java framework for building the REST API
- **Java 21** - Programming language
- **H2 Database** - Embedded in-memory database for development
- **Flyway** - Database migration tool
- **Maven** - Dependency management and build tool

### Frontend
- **React** (Coming soon)

## Features

- RESTful API endpoints
- In-memory H2 database with console access
- Database migrations with Flyway
- Student management system

## Prerequisites

- Java 21 or higher
- Maven 3.6+ (or use the included Maven wrapper)

## Getting Started

### Running the Application

1. Clone the repository:
```bash
git clone https://github.com/adityakr1108/Spring_Boot_With_React.git
cd Spring_Boot_With_React
```

2. Build the project:
```bash
./mvnw clean package
```

3. Run the application:
```bash
./mvnw spring-boot:run
```

The application will start on `http://localhost:8080`

### Accessing H2 Console

The H2 database console is available at: `http://localhost:8080/h2-console`

**Connection Details:**
- JDBC URL: `jdbc:h2:mem:demo`
- Username: `sa`
- Password: (leave empty)

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/springPractice/demo/
│   │       ├── DemoApplication.java
│   │       └── Student/
│   └── resources/
│       ├── application.properties
│       └── db/migration/
└── test/
```

## API Endpoints

(Documentation coming soon)

## Database Migrations

Flyway migrations are located in `src/main/resources/db/migration/`. 

Migrations run automatically on application startup.

## Building for Production

```bash
./mvnw clean package -DskipTests
java -jar target/demo-0.0.1-SNAPSHOT.jar
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the MIT License.