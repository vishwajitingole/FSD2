const express = require('express'); // Express module ko import kar rahe hain
const app = express(); // Express application ko initialize kar rahe hain
const port = 3000; // Server ka port define kar rahe hain

// Middleware to parse incoming JSON data
app.use(express.json()); // Body ko JSON mein parse karne ke liye

// In-memory array to store movies (temporary database)
let movies = [];

// POST route to create a new movie
app.post('/movies', (req, res) => {
    const { title, director, releaseYear } = req.body; // Movie details ko request body se extract kar rahe hain

    // Input validation: sabhi fields required hain
    if (!title || !director || !releaseYear) {
        return res.status(400).json({
            status: 'error',
            message: 'Title, director, and release year are required' // Agar koi field missing ho toh error message
        });
    }

    // Create a new movie object
    const movie = { id: movies.length + 1, title, director, releaseYear };
    movies.push(movie); // New movie ko array mein add kar rahe hain

    // Success response with created movie details
    return res.status(201).json({
        status: 'success',
        message: 'Movie created successfully',
        data: movie // Movie ki details ko response mein bhej rahe hain
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});