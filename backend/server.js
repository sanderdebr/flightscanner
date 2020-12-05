const express = require('express');
const cors = require('cors');
var session = require('express-session');
const passport = require('passport');

// Allows to read dotenv
require('dotenv').config();

// Page routing
const authRouter = require('./routes/auth');
const { response } = require('express');

// Declare server
const app = express();

// Server options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', 1);
// app.use(cors());
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

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// Require passport config
require('./services/passport');

// Declare routes

app.use('/auth', authRouter);

const PORT = process.env.PORT || 5000;

//Connects or create db and then starts app
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}!`),
);
