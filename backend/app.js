const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/students');
const Admin = require('./routes/api/admin');
const certificate = require('./routes/api/certificate');
const unidata = require('./routes/api/unidata');
const complain=require('./routes/api/Complain');
const cors=require('cors');
const bodyParser=require('body-parser');
const app = express();

app.use(cors({origin:true,credentials: true}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/students', routes);
app.use('/api/admin', Admin);
app.use('/api/certificate', certificate);
app.use('/api/unidata', unidata);
app.use('/api/complain',complain);

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});