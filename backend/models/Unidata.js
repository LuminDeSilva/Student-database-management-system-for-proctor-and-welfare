const mongoose = require('mongoose');

const UnidataSchema = new mongoose.Schema({
    faculties: {
        type: Number,
        required: true,
    },
    academicstaff: {
        type: Number,
        required: true,
    },
    students: {
        type: Number,
        required: true,
    },
    nonacademicstaff: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Unidata', UnidataSchema);