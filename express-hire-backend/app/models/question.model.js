const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question_text: String,
    category: String,
    difficulty_level: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Interviewer' },
});

module.exports = mongoose.model('Question', questionSchema);