const express = require('express');
var session = require('express-session');
const passport = require('passport');

// Allows to read dotenv
require('dotenv').config();

// Page routing
const authRouter = require('./routes/auth');

// Declare server
const app = express();

// Server options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', 1);

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
    response.sendStatus(204);
  } else {
    next();
  }
});

app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, sameSite: 'none' },
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
