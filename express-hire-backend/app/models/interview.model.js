const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
    interviewer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Interviewer' },
    interview_date: Date,
    status: String,
    feedback: String,
    emotion_analysis: {
        emotion_result: String,
        score: Number,
        timestamp: Date
    },
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Interview', interviewSchema);