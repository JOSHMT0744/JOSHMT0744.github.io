'use strict';
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
   
// create reusable transporter object using default transport
   let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
         user: 'josht200@live.com',
         pass: 'hoL9@ghy'
      }
   });

app.post('/sendEmail', (req, resp) => {
   try {
      const data = req.body;
      console.log(data);
      const name = data.name;
      const email = data.email;
      const message = data.message;
      console.log(name, email, message);
   
      const mailDetails = {
         from: 'josht200@live.com',
         to: 'lcbc28@durham.ac.uk',
         subject: data.name,
         text: `Email: ${data.email} \n Message: ${data.message}`
      };
   
      transporter.sendMail(mailDetails, function (err, data) {
         if (err) {
            console.log('Error occurs ' + err.message);
         } else {
            console.log('Email sent successfully');
         }
      })
   } catch (err) {
      throw err;
   }
   

   resp.send('Ok');
});


module.exports = app;