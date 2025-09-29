# Backend Tutorial

A comprehensive Node.js backend tutorial covering fundamental concepts including HTTP servers, Express.js, templating engines (Pug), file operations, and MongoDB integration.

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Tutorials Covered](#tutorials-covered)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## ✨ Features

- **Basic HTTP Server**: Learn to create servers with Node.js built-in HTTP module
- **Express.js Integration**: Modern web application framework examples
- **Template Engine**: Pug template engine implementation
- **File Operations**: File reading, writing, and manipulation
- **Routing**: Various routing examples and patterns
- **JSON Data Handling**: Working with JSON files and APIs
- **MongoDB Integration**: Database connection and operations
- **Static File Serving**: CSS, JS, and other static assets

## 🔧 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (for database tutorials)
- A code editor (VS Code recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Itsme-kaushal/backend-tuturial.git
   cd backend-tuturial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the basic server**
   ```bash
   node server.js
   ```
   The server will run at `http://localhost:8080`

## 📁 Project Structure

```
backend-tutorial/
├── server.js              # Basic HTTP server
├── dirdemo.js             # Directory operations demo
├── writefile.js           # File writing examples
├── package.json           # Project dependencies
├── output.txt             # Sample output file
├── mongo-tut/             # MongoDB tutorials
│   └── assignment-1.txt
└── Viren/                 # Advanced tutorials
    ├── customer.json      # Sample JSON data
    ├── product.json       # Product data
    ├── user.js            # User management
    ├── main.js            # Main application
    ├── eventmethod.js     # Event handling
    ├── writeFileSync.js   # Synchronous file operations
    ├── express/           # Express.js tutorials
    │   ├── first.js       # Basic Express server
    │   ├── cartify.js     # Shopping cart module
    │   ├── assignment1/   # Assignment examples
    │   ├── assignment2/   # Blog application
    │   ├── pug/           # Pug templating
    │   └── pug2/          # Advanced Pug examples
    └── mongoDb/           # Database tutorials
```

## 🚀 Getting Started

### 1. Basic HTTP Server
Run the basic HTTP server that responds with personalized greetings:
```bash
node server.js
```
Visit: `http://localhost:8080/YourName`

### 2. Express.js Applications
Navigate to the Express tutorials:
```bash
cd Viren/express
node first.js
```
Server runs at: `http://localhost:3000`

### 3. Pug Template Engine
Experience dynamic templating:
```bash
cd Viren/express/pug
node start.js
```
Routes available:
- `/index` - Basic template
- `/product` - Electronics products
- `/clothing` - Clothing items

### 4. Advanced Pug with Styling
```bash
cd Viren/express/pug2
node app.js
```

## 📚 Tutorials Covered

### Core Node.js Concepts
- ✅ HTTP module and server creation
- ✅ URL parsing and routing
- ✅ File system operations
- ✅ Event-driven programming
- ✅ Asynchronous vs Synchronous operations

### Express.js Framework
- ✅ Basic Express server setup
- ✅ Middleware implementation
- ✅ Routing and route parameters
- ✅ Static file serving
- ✅ Template engine integration

### Template Engines
- ✅ Pug template syntax
- ✅ Dynamic data rendering
- ✅ Template inheritance and partials
- ✅ Conditional rendering and loops

### Data Management
- ✅ JSON file operations
- ✅ Data parsing and manipulation
- ✅ MongoDB integration
- ✅ CRUD operations

### File Operations
- ✅ Reading files asynchronously
- ✅ Writing files synchronously
- ✅ Directory operations
- ✅ File stream handling

## 🔗 API Endpoints

### Basic Server (Port 8080)
- `GET /` - Default greeting
- `GET /:name` - Personalized greeting

### Express Server (Port 3000)
- `GET /cartify` - Shopping cart functionality
- `GET /index` - Main page template
- `GET /product` - Electronics products page
- `GET /clothing` - Clothing products page

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Pug** - Template engine
- **Morgan** - HTTP request logger middleware
- **MongoDB** - NoSQL database
- **HTML/CSS** - Frontend styling
- **JSON** - Data format

## 📝 Sample Data

The project includes sample JSON data for:
- **Customer information**
- **Product catalog** (Electronics, clothing, etc.)
- **User management**

## 🎯 Learning Objectives

By completing this tutorial, you will understand:

1. **Server-side JavaScript** fundamentals
2. **HTTP protocol** and request/response cycle
3. **Express.js** framework and middleware
4. **Template engines** for dynamic content
5. **File system operations** in Node.js
6. **Database integration** with MongoDB
7. **RESTful API** design principles
8. **Asynchronous programming** patterns

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Author**: Kaushal Singh  
**Repository**: [backend-tuturial](https://github.com/Itsme-kaushal/backend-tuturial)

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

---

⭐ **Star this repository** if you found it helpful for learning backend development!