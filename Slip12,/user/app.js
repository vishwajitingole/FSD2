const express = require('express'); // Express module ko import kar rahe hain
const app = express(); // Express application ko initialize kar rahe hain
const port = 3000; // Server ka port define kar rahe hain

// Middleware to parse incoming JSON data
app.use(express.json()); // Body ko JSON mein parse karne ke liye

// In-memory array to store users (temporary database)
let users = [];


// POST route to create a new user
app.post('/users', (req, res) => {
    const { name, email, age } = req.body; // User details ko request body se extract kar rahe hain

    // Input validation: sabhi fields required hain
    if (!name || !email || !age) {
        return res.status(400).json({
            status: 'error',
            message: 'Name, email, and age are required' // Agar koi field missing ho toh error message
        });
    }

    // Create a new user object
    const user = { id: users.length + 1, name, email, age };
    users.push(user); // New user ko array mein add kar rahe hain

    // Success response with created user details
    return res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: user // User ki details ko response mein bhej rahe hain
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});