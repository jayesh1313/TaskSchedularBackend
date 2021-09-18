const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    startDate: String,
    endDate: String,
    id: String,
    Location: String,
})

const model = mongoose.model('task', schema);

module.exports = model;