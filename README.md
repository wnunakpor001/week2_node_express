# Express User API

A simple Express.js application that demonstrates the use of middleware, static file serving, route parameters, request validation, and environment variables.

## Features

* Express.js server setup
* Environment variable configuration with dotenv
* Custom request logging middleware
* JSON request body parsing
* Static file serving
* User creation endpoint
* Dynamic route parameters
* Basic error handling

## Project Structure

```text
project-folder/
│
├── public/
│   └── index.html
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd project-folder
```

3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=4000
```

## Running the Application

Start the server:

```bash
npm start
```

Or, if using nodemon:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:4000
```

## API Endpoints

### GET /

Serves the homepage.

**Request**

```http
GET /
```

**Response**

Returns the `index.html` file from the `public` folder.

---

### POST /user

Creates a user and returns a greeting message.

**Request**

```http
POST /user
Content-Type: application/json
```

**Body**

```json
{
  "name": "Wisdom",
  "email": "wisdom@example.com"
}
```

**Success Response**

```json
{
  "message": "Hello, Wisdom!"
}
```

**Error Response**

```json
{
  "error": "Name and email are required"
}
```

---

### GET /user/:id

Returns a simple profile message for the specified user ID.

**Request**

```http
GET /user/1
```

**Response**

```json
{
  "message": "User 1 profile"
}
```

## Middleware

### JSON Parser

Parses incoming JSON requests.

```javascript
app.use(express.json());
```

### Request Logger

Logs all incoming requests to the console.

Example:

```text
GET request made to /user/1
POST request made to /user
```

### Static Files

Serves files from the `public` directory.

```javascript
app.use(express.static(path.join(__dirname, "public")));
```

## Technologies Used

* Node.js
* Express.js
* dotenv

## Author

**Wisdom Nunakpor**

Aspiring Backend Developer focused on JavaScript, APIs, Data Analytics, and DevOps.
