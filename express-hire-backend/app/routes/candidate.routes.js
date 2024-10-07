const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');

router.post('/create', candidateController.createCandidate);
router.get('/', candidateController.getAllCandidates);

module.exports = router;