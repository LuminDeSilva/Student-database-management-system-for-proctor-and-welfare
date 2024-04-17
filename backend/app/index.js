const dbconfig = require('./config');
const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.journal = require('./model.js')(mongoose);

module.exports = db;