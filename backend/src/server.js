const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World! Express server is running.',
        timestamp: new Date().toISOString()
    });
});

// API route example
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
    ];
    res.json(users);
});

// POST route example
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'Name and email are required'
        });
    }

    const newUser = {
        id: Date.now(), // Simple ID generation
        name,
        email
    };

    res.status(201).json({
        message: 'User created successfully',
        user: newUser
    });
});

// Route with parameters
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    // Mock user lookup
    const user = {
        id: parseInt(id),
        name: 'Sample User',
        email: 'user@example.com'
    };

    res.json(user);
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.originalUrl
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Available routes:`);
    console.log(`  GET  /`);
    console.log(`  GET  /api/users`);
    console.log(`  POST /api/users`);
    console.log(`  GET  /api/users/:id`);
});