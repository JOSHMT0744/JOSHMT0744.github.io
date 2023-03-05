const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/email', require('./routes/api/email'));

app.get('/', (req, resp) => {
  resp.send('Running...');
});

const port = process.env.PORT || 8090;

app.listen(port, () => {
   console.log(`Listening on PORT ${port}`);
});
module.exports = app;
