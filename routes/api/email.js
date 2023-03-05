/* eslint-disable no-useless-catch */
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send('On the email page');
});

// create reusable transporter object using default transport
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'joshthompsonwebsite@outlook.com',
    pass: 'Jdnco08876&@'
  }
});

router.post('/sendEmail', (req, resp) => {
  const data = req.body;
  // console.log(data);
  const name = data.name;
  const email = data.email;
  const message = data.message;
  console.log(name, email, message);

  const mailDetails = {
    from: 'joshthompsonwebsite@outlook.com',
    to: 'lcbc28@durham.ac.uk',
    subject: data.name,
    text: `Email: ${data.email} \n Message: ${data.message}`
  };
  try {
    // eslint-disable-next-line no-unused-vars
    transporter.sendMail(mailDetails, (err, data) => {
      if (err) {
        console.log('Error occurs ' + err.message);
      } else {
        console.log('Email sent successfully');
      }
    });
  } catch (err) {
    throw err;
  }
  console.log(mailDetails);
  resp.send(mailDetails);
});

module.exports = router;
