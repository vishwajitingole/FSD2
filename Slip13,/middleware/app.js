const express = require('express'); // Express module ko import kar rahe hain
const app = express(); // Express application ko initialize kar rahe hain
const port = 3000; // Server ka port define kar rahe hain

// Middleware to parse incoming JSON data
app.use(express.json()); // Body ko JSON format mein parse karne ke liye
app.use(express.urlencoded({ extended: true })); // Form data ko bhi handle karne ke liye

// In-memory array to store users (temporary database)
let users = [];

// Validation Middleware Function
function validateUserData(req, res, next) {
    const { name, email, age } = req.body; // User details ko request body se extract kar rahe hain

    // Manual Validation: Sabhi fields ko check kar rahe hain
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            status: 'error',
            message: 'Name is required and should be a non-empty string'
        });
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
        return res.status(400).json({
            status: 'error',
            message: 'Please enter a valid email address'
        });
    }

    if (!age || isNaN(age) || age < 18) {
        return res.status(400).json({
            status: 'error',
            message: 'Age is required and must be a number greater than or equal to 18'
        });
    }

    // Agar sab kuch valid hai, toh next middleware ko call karte hain
    next();
}

// POST route to create a new user with the validation middleware
app.post('/users', validateUserData, (req, res) => {
    const { name, email, age } = req.body; // User details ko request body se extract kar rahe hain

    // Create a new user object
    const user = { id: users.length + 1, name, email, age };
    users.push(user); // New user ko array mein add kar rahe hain

    // Success response with created user details
    return res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: user // Created user ki details
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});