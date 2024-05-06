const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:8080'
    };

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./app/index.js');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log("Connected to the database!");
    })
    .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
    });

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the application." });
    }
);

require('./app/route.js')(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    }   
);


