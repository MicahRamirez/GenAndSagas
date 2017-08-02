const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

let corsOptions = {
  origin: 'http://localhost:3001',
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/test', function (req, res) {
  console.log('got request');
  res.json({payload: 'success'});
});

app.post('/api/authenticate', function (req, res) {
    if (req.body.params.username !== 'xramirez@athenahealth.com') {
      res.json({payload: {errorCode: 'INVALIDUSERNAME'}})
    }
    else if(req.body.params.pwd !== 'micah') {
      res.json({payload: {errorCode: 'INVALIDPWD'}});
    }
    else {
      res.json({payload: {user: {username: 'Micah'}}});
    }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});