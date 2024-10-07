const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('../database/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//all routes
app.use('/api/candidates', require('./routes/candidate.routes'));
app.use('/api/interviewers', require('./routes/interviewer.routes'));
app.use('/api/interviews', require('./routes/interview.routes'));
app.use('/api/questions', require('./routes/question.routes'));

//server port number
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});