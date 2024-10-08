const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('../database/db');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Enable CORS for all requests
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('CORS enabled!');
});

//all routes
app.use('/api/candidates', require('./routes/candidate.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/interviews', require('./routes/interview.routes'));
app.use('/api/questions', require('./routes/question.routes'));

//server port number
app.listen(process.env.PORT, () => {
    console.log('Server listening on port 3000');
});