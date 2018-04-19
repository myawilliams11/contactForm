const express = require('express')
const app = express()
const port = 2000;

// allows us to process submitted form data
app.use(express.urlencoded({extended: true}));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var mail1 = req.body.user_mail1;
  var mail2 = req.body.user_mail2;
  var homepage = req.body.homepage;
  var method = req.body.user_method;
  var device = req.body.user_device;

//   var email = req.body.user_mail;

  console.log("Name: " + name);
  console.log("mail1: " + mail1);
  console.log("mail2: " + mail2);
  console.log("homepage: " + homepage);
  console.log("method: " + user_device + value);
  console.log("device: " + user_devoce +value);

  res.send(`
    <h1>Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong>.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);