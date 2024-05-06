const db = require('./index');
const Journal = db.journal;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Journal
  const journal = new Journal({
    registrationNumber: req.body.registrationNumber,
    name: req.body.name,
    yearOfStudy: req.body.yearOfStudy
    });

    // Save Journal in the database
    journal
      .save(journal)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Journal."
        });
      });
}

exports.findAll = (req, res) => {
    const registrationNumber = req.query.registrationNumber;
    var condition = registrationNumber ? { registrationNumber: { $regex: new RegExp(registrationNumber), $options: "i" } } : {};
    
    Journal.find(condition)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving journals."
        });
        });
    };

exports.findOne = (req, res) => {
    const id = req.params.id;

    Journal.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Journal with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Journal with id=" + id });
        });
    };

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
        message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Journal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot update Journal with id=${id}. Maybe Journal was not found!`
            });
        } else res.send({ message: "Journal was updated successfully." });
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating Journal with id=" + id
        });
        });
    };

exports.delete = (req, res) => {
    const id = req.params.id;

    Journal.findByIdAndRemove(id)
        .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot delete Journal with id=${id}. Maybe Journal was not found!`
            });
        } else {
            res.send({
            message: "Journal was deleted successfully!"
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete Journal with id=" + id
        });
        });
    };

