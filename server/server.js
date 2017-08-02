const express = require('express')
const app = express()

app.get('/test', function (req, res) {
  console.log('got request');
  res.send({payload: 'success'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});