const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

// Allows to read dotenv
require('dotenv').config();

// Declare server
const app = express();

// Server options
app.use((request, response, next) => {
  response.header(
    'Access-Control-Allow-Origin',
    request.headers.origin,
  );
  next();
});

// Configure session storahe
app.use(
  cookieSession({
    name: 'session-name',
    keys: ['key1', 'key2'],
  }),
);

// Configure passport
app.use(passport.initialize());
app.use(passport.session());

// Init middleware
app.use(express.json());

// Declare routes
app.use('/api/auth', require('./routes/api/auth'));

// Require passport config
require('./services/passport');

const PORT = process.env.PORT || 5000;

//Connects or create db and then starts app
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}!`),
);
