const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database');
    } else {
        console.log('Connected to database:' + config.db);
    }
});

app.use(express.static(path.join(__dirname + '/client/dist/')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});