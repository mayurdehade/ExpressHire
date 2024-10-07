const mongoose = require('mongoose');

const interviewerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Interviewer', interviewerSchema);