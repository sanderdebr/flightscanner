//Requires dependencies
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); //Required to pass responses through auth middleware

//Allows to read dotenv
dotenv.config();

//Declares server
const server = express();

server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
  );
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

// Options for server
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

// Registers routes
server.get('/', (request, response) => {
  response.send({ message: 'I am running' });
});

//Defines server port (if declared from env file otherwise on port 5000)
const port = process.env.PORT || 5000;

//Connects or create db and then starts server
server.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
