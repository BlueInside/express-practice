const express = require('express');
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log('Logged');
  next();
};
app.get('/', myLogger, function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
