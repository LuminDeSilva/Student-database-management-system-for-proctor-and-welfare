const express = require('express');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
// Define your routes and middleware here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


