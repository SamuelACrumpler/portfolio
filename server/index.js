const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const path = require('path');
const app = express();
const cors = require("cors");
const creds = require('./config');
var nodemailer = require('nodemailer');
var request = require('request');
const dotenv = require('dotenv');
const { default: ReCAPTCHA } = require('react-google-recaptcha');
const { Redirect } = require('react-router');
const { default: axios } = require('axios');
dotenv.config();
// const mongoose = require('mongoose');

// mongoose.Promise = require('bluebird');

// mongoose.connect('mongodb+srv://scrump:'+process.env.MDBP+'@cluster0.gmugj.mongodb.net/math-game?retryWrites=true&w=majority', {promiseLibrary: require('bluebird') })
// 	.then(() => console.log('connection successful'+process.env.NODE_ENV + " PORT" + process.env.PORT))
// 	.catch((err) => console.error(err));


// var score = require("./routes/score");

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));



var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res) => {

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `Name: ${name} \n E-mail: ${email} \n Message: ${message} `

  var mail = {
    from: name,
    to: 'Samuel.A.Crumpler@gmail.com',  //Change to email address that you want to receive messages on
    subject: '[Contact Form]',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })

});

app.post('/api/cap', (req, res, next) => {

  console.log(req.body['g-recaptcha-response']);

  var options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    form: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: req.body['g-recaptcha-response'],
    },
    json: true // Automatically stringifies the body to JSON
  };

  request(options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('error' + err);
    })

});

 
app.post('/api/recap', (req, res, next) => {
  const recaptchaData = {
    remoteip: req.connection.remoteAddress,
    response: _.get(req.body, 'recaptchaResponse'),
    secret: process.env.RECAPTCHA_SECRET_KEY,
  };

  return recaptchaHelpers.verifyRecaptcha(recaptchaData)
    .then(() => {
      // Process the request
      console.log("reuqest finished")
    });
});

app.post('/api/rcap',function(req,res){
 

 
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
  }
  
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + process.env.RECAPTCHA_SECRET_KEY + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  

  axios.post(
    verificationUrl,
    {},
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
      },
    },
  ).then(res =>{
  });
});



  
  app.use(express.static(path.join(__dirname, '../client/build')));


app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/../client/build/index.html'));
  });

port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', function(err) {
	console.log("Started listening on %s", app.url);
  });

console.log('App is listening on port ' + port);