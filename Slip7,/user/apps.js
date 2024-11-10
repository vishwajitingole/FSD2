const express = require('express'); // Express module ko import kar rahe hain
const app = express(); // Express application ko initialize kar rahe hain
const port = 3000; // Server ka port define kar rahe hain

app.use(express.json()); // Express ko bata rahe hain ki hum JSON data handle karenge

// In-memory array to store users (temporary database ke jaise)
let users = [];

// POST route to create a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body; // Body se name aur email le rahe hain

    // Basic validation to check if both name and email are provided
    if (!name || !email) {
        return res.status(400).send('Name and email are required'); // Agar name ya email nahi hai toh error bhejenge
    }

    // Create a new user object and add it to the users array
    const user = { id: users.length + 1, name, email };
    users.push(user); // New user ko array mein add kar rahe hain

    // Send back the created user in the response
    res.status(201).json(user); // Status 201 means successfully created
});

// GET route to read all users
app.get('/users', (req, res) => {
    res.status(200).json(users); // Users array ko response mein bhej rahe hain
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});