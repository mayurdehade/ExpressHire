const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interview.controller');

router.post('/schedule', interviewController.scheduleInterview);
router.get('/', interviewController.getAllInterviews);

module.exports = router;