# Instagram Post Application

An Instagram-style post application built using Node.js, Express.js, EJS, HTML, CSS, and JavaScript.

## About the Project

This project is a simple Instagram-style web application created to practice backend development, routing, CRUD operations, and dynamic web pages using Express.js and EJS.

The application stores posts temporarily in an in-memory array.

## Features

* Create a new post
* View all posts
* View individual post details
* Edit posts
* Delete posts
* Like posts
* Dynamic pages using EJS
* RESTful routing
* Method-override for PUT and DELETE requests

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* EJS
* Method-Override

## Project Structure

```text
insta_demo/
│
├── public/
│   ├── css/
│   └── images/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Shruti-Ugale10/insta_demo_post_app.git
```

### 2. Open the project folder

```bash
cd insta_demo_post_app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node app.js
```

### 5. Open in your browser

```text
http://localhost:8080/posts
```

## Note

This project currently uses an in-memory array to store posts instead of a database. Therefore, the posts are temporary and may be lost when the server restarts.

## Learning Goals

This project helped me practice:

* Node.js fundamentals
* Express.js
* Routing
* CRUD operations
* EJS templating
* RESTful APIs
* HTTP methods
* Middleware
* Git and GitHub

## Author

Shruti Ugale

B.Tech Student
