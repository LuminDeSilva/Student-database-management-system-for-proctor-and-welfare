module.exports = mongoose => {
    const schema = new mongoose.Schema({
        registrationNumber: String,
        name: String,
        yearOfStudy: Number
    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Journal = mongoose.model('journal', schema);
    return Journal;
};