const express = require('express');
const router = express.Router();

const Unidata = require('../../models/Unidata');

router.get('/', async (req, res) => {
    Unidata.find()
        .then(unidata => res.json(unidata))
        .catch(err => res.status(404).json({ noUnidataFound: 'No unidata found' }));
});

module.exports = router;