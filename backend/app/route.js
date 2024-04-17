const express = require('express');

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/users', (req, res) => {
    // Logic to fetch users from the database
    const users = ['John', 'Jane', 'Bob'];
    res.json(users);
});

// Export the router
module.exports = router;