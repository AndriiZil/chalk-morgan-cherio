const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan(':method :url :status :response-time ms'));

app.get('/', (req, res) => {
  res.send('hello, world!')
});

app.listen(8080)