
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

app.use(express.static('public'));




app.get('/', (req, res) => {
  // Send email
let emailDestination;
let emailPassword;
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailDestination,
    pass: emailPassword
  }
});

let mailOptions = {
  from: emailDestination,
  to: emailDestination,
  subject: 'Sending email from node.js!',
  text: 'This is a nodejs email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log(error);
  }else{
    console.log('Email sent.');
  }
});
  res.send('/public/index.html');
})

app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port}`)
})