const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// GET /
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST /user
app.post("/user", (req, res) => {
    const { name, email } = req.body;

    // Error handling
    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }

    res.json({
        message: `Hello, ${name}!`
    });
});

// GET /user/:id
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    res.json({
        message: `User ${userId} profile`
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});