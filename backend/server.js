const express = require('express');
const passport = require('passport');
const session = require('cookie-session');
const bodyParser = require('body-parser'); //Required to pass responses through auth middleware

// Allows to read dotenv
require('dotenv').config();

// Page routing
const authRouter = require('./routes/auth');

// Declare server
const app = express();

// Server options
app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Credentials', true);
  response.header(
    'Access-Control-Allow-Origin',
    request.headers.origin,
  );
  response.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE',
  );
  response.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
  );
  if ('OPTIONS' == request.method) {
    response.send(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());

// Server options
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// Declare routes
app.use('/auth', authRouter);

// Require passport config
require('./services/passport');

const PORT = process.env.PORT || 5000;

//Connects or create db and then starts app
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}!`),
);
