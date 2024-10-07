const Candidate = require('../models/candidate.model');

exports.createCandidate = async (req, res) => {
    try {
        const candidate = new Candidate(req.body);
        await candidate.save();
        res.json(candidate);
    } catch (error) {
        res.status(500).json({ message: 'Error creating candidate' });
    }
};

exports.getAllCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find().exec();
        res.json(candidates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching candidates' });
    }
};