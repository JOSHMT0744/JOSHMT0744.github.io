const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/api/email', require('./routes/api/email'));

/*
app.get('/', (req, resp) => {
  resp.send('Running...');
});
*/
module.exports = app;
