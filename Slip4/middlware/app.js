// Express aur body-parser module ko import karte hain
const express = require('express');
const app = express();

// Body parsing middleware, jo JSON aur form-data ko parse karega
app.use(express.json()); // JSON ko parse karega, jaise client ne JSON bheja hai
app.use(express.urlencoded({ extended: true })); // Form data ko parse karega, agar koi form submit ho raha ho

// Middleware for input validation
function validateInput(req, res, next) {
    // Request body mein name aur email check karna
    const { name, email } = req.body;

    // Agar name nahi diya hai ya phir name ka length 3 se kam hai, toh error de denge
    if (!name || name.length < 3) {
        return res.status(400).send('Name is required and should be at least 3 characters long.');
    }

    // Agar email valid nahi hai, ya email mein '@' nahi hai, toh error de denge
    if (!email || !email.includes('@')) {
        return res.status(400).send('Valid email is required.');
    }

    // Agar sab kuch sahi hai, toh next middleware ko call karenge
    next();
}

// Sample route jo validate karega input aur phir response bhejega
app.post('/submit', validateInput, (req, res) => {
    const { name, email } = req.body;
    // Valid data mil gaya toh successful response bhejenge
    res.status(200).send(`Data received: Name: ${name}, Email: ${email}`);
});

// Server ko start karte hain
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});