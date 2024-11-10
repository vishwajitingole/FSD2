const express = require('express'); // Express ko import kar rahe hain
const app = express(); // Express app bana rahe hain
const port = 3000; // Server ka port define kar rahe hain

app.use(express.json()); // Body parsing middleware for JSON data

// In-memory array to store products (simple database ki tarah)
let products = [];

// Route to Create a Product (POST method)
app.post('/products', (req, res) => {
    const { name, price } = req.body; // Product ka naam aur price request body se le rahe hain

    // Check if product name and price are provided
    if (!name || !price) {
        return res.status(400).send('Product name and price are required'); // Agar data nahi hai toh error return karo
    }

    // Create a new product object and push it to the products array
    const product = { id: products.length + 1, name, price };
    products.push(product); // Product ko array mein add kar rahe hain

    // Send success response with the created product
    res.status(201).json(product); // Status 201 ka matlab hai resource created
});

// Route to Read all Products (GET method)
app.get('/products', (req, res) => {
    res.status(200).json(products); // Products array ko return kar rahe hain
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});