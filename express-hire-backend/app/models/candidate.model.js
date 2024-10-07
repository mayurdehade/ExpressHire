const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: String,
    email: String,
    // created_at: Date,
    // updated_at: Date
});

module.exports = mongoose.model('Candidate', candidateSchema);