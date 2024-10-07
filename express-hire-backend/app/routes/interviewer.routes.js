const express = require('express');
const router = express.Router();
const interviewerController = require('../controllers/interviewer.controller');

router.post('/create', interviewerController.createInterviewer);
router.get('/', interviewerController.getAllInterviewers);

module.exports = router;