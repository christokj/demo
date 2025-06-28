const express = require('express');
const app = express();

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/test', (req, res) => {
    res.json({ status: 'API working!' });
});

module.exports = app;