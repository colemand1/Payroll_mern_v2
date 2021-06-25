var express = require('express');
var router = express.Router();

const client = require('twilio')(process.env.REACT_APP_TEST_TWILIO_ACCOUNT_SID, process.env.REACT_APP_TEST_TWILIO_AUTH_TOKEN);


router.get('/', (req, res) =>{
    console.log("AccountSID: ", process.env.REACT_APP_TEST_TWILIO_ACCOUNT_SID)
    console.log("AuthToken: ", process.env.REACT_APP_TEST_TWILIO_AUTH_TOKEN)
})
// router.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     console.log("To: ", req.body.to);
//     console.log("From: ", process.env.REACT_APP_TWILIO_FROM_NUMBER);
//     console.log("Body: ", req.body.body);
//     client.messages
//       .create({
//         from: environment.test.fromNumber,
//         to: req.body.to,
//         body: req.body.body
//       })
//       .then(() => {
//         res.send(JSON.stringify({ success: true }));
//       })
//       .catch(err => {
//         console.log(err);
//         res.send(JSON.stringify({ success: false }));
//       });
//   });

router.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    console.log("To: ", req.body.to);
    console.log("From: ", process.env.REACT_APP_TEST_TWILIO_FROM_NUMBER);
    console.log("Body: ", req.body.body);
    client.messages
      .create({
        from: process.env.REACT_APP_TEST_TWILIO_FROM_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(message => console.log(message.sid))
      .catch(err => {
        console.log(err);
      });
  });


  module.exports = router;

