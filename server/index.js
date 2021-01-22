const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const path = require('path');
const app = express();
const cors = require("cors");
const creds = require('./config');
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
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

// app.use("/api/score", score);


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
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'Samuel.A.Crumpler@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
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

app.post('/cap', (req, res, next) => {

  console.log(req.body['g-recaptcha-response']);

  var options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    body: {
      secret: '6LcAuUoUAAAAAH-uiWl9cz0Wicg7iUsDxHImrgLO',
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

app.post('/submit',function(req,res){
  // g-recaptcha-response is the key that browser will generate upon form submit.
  // if its blank or null means user has not selected the captcha, so return the error.
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
  }
  // Put your secret key here.
  var secretKey = "--paste your secret key here--";
  // req.connection.remoteAddress will provide IP address of connected user.
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  request(verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
    res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
  });
});


app.post('/jow', (req, res, next) => {

  console.log(req.body['g-recaptcha-response']);

  var options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    form: {
      secret: process.env.skey,
      response: req.body['g-recaptcha-response'],
    },
    json: true // Automatically stringifies the body to JSON
  };

  request(options)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('error');
    })

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