const express = require('express')
const app = express()
const port = 2000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name, name;
  var age = req.body.user_age, age;
  var mail1 = req.body.user_mail1, mail1;
  var cell = req.body.user_cell, cell;
  var homepage = req.body.homepage;
  var method = req.body.user_method;
  var device = req.body.user_device;
  var inquiry = req.body.user_inquiry;
  var plan  = req.body.user_plan;
  var message = req.body.user_messge;

//   var email = req.body.user_mail;

  console.log("Name: " + name);
  console.log("mail1: " + mail1);
  console.log("mail2: " + mail2);
  console.log("homepage: " + homepage);
  console.log("method: " + method);
  console.log("device: " + device );
  console.log("inquiry:" + inquiry);
  console.log("plan" + plan + ' ');
  console.log("message" + message + ' ');

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${mail1}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);