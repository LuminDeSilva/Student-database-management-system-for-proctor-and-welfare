module.exports = app => {
    const journals = require("./controller.js");

    var router = require("express").Router();

    // Create a new Journal
    router.post("/", journals.create);

    // Retrieve all Journals
    router.get("/", journals.findAll);

    // Retrieve a single Journal with id
    router.get("/:id", journals.findOne);

    app.use('/api/journals', router);
}