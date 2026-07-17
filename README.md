- myapp-base

-A full-stack enterprise application built with Java EE, EJB, JAX-RS, Angular 21, and packaged as a WebLogic EAR. This repository contains all modules required to build and deploy the complete application.

- Project Structure

myapp-base/
│
├── myapp-ejb/        # EJB module (business logic)
├── myapp-rest/       # JAX-RS REST API module
├── myapp-ng/         # Angular 21 frontend (packaged as WAR)
│   └── ng/           # Angular workspace
│       ├── src/
│       ├── dist/
│       └── node_modules/
│
├── myapp-ear/        # EAR packaging module (deployable to WebLogic)
│
└── pom.xml           # Parent Maven POM (multi-module)
🚀 Features
Backend (Java EE)
EJB-based business services

JAX-RS REST API (/myapp/rest/api/...)

WebLogic-compatible EAR packaging

JDBC datasource integration Using JPA 

Frontend (Angular 21)
Modern Angular standalone components

Angular routing (/myapp/ng/...)

Production build packaged as WAR

Served through WebLogic

🔧 Build Instructions
1. Clone the repository
bash
git clone https://github.com/shib714/myapp-base.git
cd myapp-base
2. Build the entire project
bash
mvn clean package
This will:

Install Node & npm

Run npm install inside myapp-ng/ng

Build Angular (ng build)

Package Angular output into a WAR

Package backend modules

Produce a final EAR under:

Code
- myapp-ear/target/myapp-ear-1.0.0-SNAPSHOT.ear
📦 Deployment (WebLogic)
Log in to WebLogic Console

Deploy the EAR file:

Code
myapp-ear/target/myapp-ear-1.0.0-SNAPSHOT.ear
Ensure the context roots:

REST API → /myapp/rest/api

Angular → /myapp/ng

🌐 Application URLs
Angular Frontend
Code
http://localhost:7001/myapp/ng
REST API
Code
http://localhost:7001/myapp/rest/api/products
Example Product
Code
http://localhost:7001/myapp/rest/api/products/1
🗂️ .gitignore (Important)
This project uses a multi-module structure.
The following folders must NOT be committed:

Code
# Angular
myapp-ng/ng/node_modules/
myapp-ng/ng/dist/
myapp-ng/ng/.angular/
myapp-ng/ng/.cache/

# Maven
target/

# IDE
.classpath
.project
.settings/
.idea/
.vscode/

# OS
Thumbs.db
.DS_Store
If these folders were already committed, remove them from Git tracking:

bash
git rm -r --cached myapp-ng/ng/node_modules
git rm -r --cached myapp-ng/ng/dist
git rm -r --cached myapp-ng/ng/.angular
git rm -r --cached myapp-ng/ng/.cache
git commit -m "Clean up ignored files"
git push
🧪 Testing
Backend
Run JUnit tests via Maven:

bash
mvn test
Frontend
Inside myapp-ng/ng:

bash
npm test
📁 Angular Build Output Structure
Angular 21 outputs production files to:

Code
myapp-ng/ng/dist/myapp-ng/browser/
This folder is packaged directly into the WAR root.

🤝 Contributing
Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to modify.