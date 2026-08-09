# Enterprise Architecture & Build Plan: `myapp`

This document details the complete design, multi-module structure, database mappings, build configuration, and testing pipeline for the **`myapp`** enterprise Java EE 8 / Angular 22 application targeted for **Oracle WebLogic Server 14c** and **MySQL Database**.

---

## 1. Multi-Module Project Structure

The project is structured as a Maven Multi-Module Enterprise Application (`EAR`):

```
myapp/
├── pom.xml                        # Root Parent POM
├── myapp-ejb/                     # EJB / JPA Domain Module (jar)
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/myapp/
│       │   │   ├── entity/Product.java
│       │   │   └── repository/ProductRepository.java
│       │   └── resources/META-INF/persistence.xml
│       └── test/
│           ├── java/com/myapp/repository/ProductRepositoryTest.java
│           └── resources/META-INF/persistence.xml (H2 Test PU)
├── myapp-rest/                    # JAX-RS REST API Module (war)
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/myapp/
│       │   │   ├── config/RestApplication.java
│       │   │   ├── config/CorsFilter.java
│       │   │   └── rest/ProductResource.java
│       │   └── webapp/WEB-INF/weblogic.xml
│       └── test/
│           └── java/com/myapp/rest/ProductResourceTest.java
├── myapp-ng/                      # Angular 22 UI Module (war)
│   ├── pom.xml
│   └── src/
│       └── webapp/WEB-INF/
│           ├── web.xml            # SPA Route Fallback
│           └── weblogic.xml       # Context Root: /myapp-ng
├── myapp-ear/                     # Enterprise Assembly Module (ear)
│   ├── pom.xml
│   └── src/main/application/META-INF/application.xml
└── src/                           # Angular 22 Frontend Source
    ├── proxy.conf.json
    └── app/
        ├── models/product.model.ts
        ├── services/product.service.ts
        ├── components/product-card/product-card.component.ts
        └── app.component.ts
```

---

## 2. Target Deployment & Context Roots

- **Application Server**: Oracle WebLogic Server 14c
- **Database**: MySQL Server (schema: `shopping_cart`)
- **Package**: `myapp.ear`
- **Context Roots**:
  - Backend REST API: `http://localhost:7001/myapp-rest/api`
  - Frontend Angular UI: `http://localhost:7001/myapp-ng/`

---

## 3. Database Entity Schema Mapping (`shopping_cart`)

Table: `shopping_cart` (Product JPA Entity):

| Database Column | Java Property | Type | Details |
|---|---|---|---|
| `id` | `id` | `Long` | Primary Key, `@Id`, `@GeneratedValue` |
| `title` | `title` | `String` | Product Title |
| `price` | `price` | `BigDecimal` | Product Price |
| `description` | `description` | `String` | Length: 1000 |
| `category` | `category` | `String` | Product Category |
| `image_url` | `imageUrl` | `String` | Image URL link |
| `rating_rate` | `ratingRate` | `Double` | Rating Score (e.g. 4.5) |
| `ratingCount` | `ratingCount` | `Integer` | Rating Count |
| `created_at` | `createdAt` | `LocalDateTime` | Record Creation Timestamp |

---

## 4. Angular 22 Modern Standards & Material UI Applied

1. **Angular Material UI Integration**: Integrated `@angular/material` and `@angular/cdk` (v22) using `MatCard`, `MatToolbar`, `MatButton`, `MatIcon`, `MatBadge`, `MatChips`, and `MatProgressSpinner`.
2. **Signals State Management**: `signal()`, `computed()`, and `linkedSignal()` used for component and service reactivity.
3. **Signal Component I/O**: `input()`, `output()`, and `model()` functions instead of legacy decorators.
4. **Standalone Components**: Clean standalone component declarations (without redundant `standalone: true`).
5. **Dependency Injection**: Functional `inject()` pattern instead of constructor injection.
6. **Control Flow**: Native `@if`, `@for`, and `@switch` syntax.
7. **Class/Style Bindings**: Standard `class` and `style` bindings instead of `ngClass`/`ngStyle`.

---

## 5. Comprehensive Unit Testing & REST Testing Strategy

No external mock servers are required. Testing is 100% self-contained and automated during Maven execution (`mvn test`).

### A. Backend REST Endpoint Testing (`myapp-rest`)
- **Direct Resource Unit Tests**: JUnit 5 + Mockito to mock `ProductRepository` and directly test `ProductResource` HTTP `Response` objects (`200 OK`, `201 Created`, `404 Not Found`).
- **In-Memory REST Container Testing**: Jersey Test Framework spins up an in-memory Grizzly HTTP server during build execution to test serialization (JSON-B/Jackson), CORS headers (`CorsFilter`), and HTTP client calls.

### B. JPA Repository Unit Testing (`myapp-ejb`)
- **H2 In-Memory Database**: JUnit 5 + H2 DB (`persistence-test.xml`) to execute entity mapping and CRUD repository unit tests without needing a live MySQL database instance.

### C. Frontend Angular Unit Testing (`myapp-ng`)
- **Angular `HttpTestingController` + Vitest**: Mocks backend JSON API responses inside `product.service.spec.ts` and tests component signal state changes.

### D. Maven Test Harness Summary

| Module | Test Target | Tooling / Framework | Mock Server Required? |
|---|---|---|---|
| `myapp-ejb` | JPA Repositories & Entities | JUnit 5 + Mockito + H2 In-Memory DB | ❌ No |
| `myapp-rest` | REST Controllers & CORS | JUnit 5 + Mockito + Jersey Test Container | ❌ No (Embedded in-memory container) |
| `myapp-ng` | Angular Services & Components | Angular `HttpTestingController` + Vitest | ❌ No (Built-in Angular HTTP testing) |

### E. Maven Test Plugins
- **`maven-surefire-plugin` (v3.2.5)**: Executes Java unit tests during `mvn test`.
- **`maven-failsafe-plugin` (v3.2.5)**: Executes integration tests during `mvn verify`.
- **`jacoco-maven-plugin` (v0.8.11)**: Measures and reports code coverage for Java modules.
- **`frontend-maven-plugin` (v1.15.0)**: Harnesses Angular unit tests (`npm run test -- --run`) inside Maven.

---

## 6. Build and Run Commands

### Run Unit Tests & Build EAR
```bash
mvn clean package
```

### Start Angular Dev Server with Proxy
```bash
npm start
```
Frontend: `http://localhost:4200` (Proxies `/myapp-rest` requests to WebLogic `http://localhost:7001/myapp-rest`).

---

## 7. WebLogic 14c Deployment

1. Log into WebLogic Administration Console (`http://localhost:7001/console`).
2. Navigate to **Deployments** $\rightarrow$ **Install**.
3. Select `myapp-ear/target/myapp.ear`.
4. Deploy as an Enterprise Application to your target server/cluster.
