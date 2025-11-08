// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

// Set the port the server will run on
const port = 3000;

// Middleware to handle static files (like your frontend)
app.use(express.static('frontend'));

// Define a route (endpoint) to serve a page or content
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html'); // Serve the frontend HTML file
});

// Sample API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
