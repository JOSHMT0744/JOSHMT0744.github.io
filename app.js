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
app.use(function(req, res, next) { // Thank you ChatGPT
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
 });
 
   
// create reusable transporter object using default transport
   let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
         user: 'joshthompsonwebsite@outlook.com',
         pass: 'Jdnco08876&@'
      }
   });

app.post('/sendEmail', (req, resp) => {
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
   resp.send(mailDetails);
});


module.exports = app;