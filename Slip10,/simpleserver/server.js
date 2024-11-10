// Required module
const http = require('http'); // HTTP module ko import kar rahe hain

// Server create karna
const server = http.createServer((req, res) => { // Request aur response ko handle karenge
    res.statusCode = 200; // 200 ka matlab successful response
    res.setHeader('Content-Type', 'text/plain'); // Response ka type define karte hain
    res.end('Hello, Welcome to my simple Node.js server!'); // Yaha pe response send kar rahe hain
});

// Server ko listen karna
const port = 3000; // Humara server port 3000 pe chalega
server.listen(port, () => { // Server ko start kar rahe hain
    console.log(`Server is running at http://localhost:${port}/`); // Message display ho raha hai jab server start ho
});