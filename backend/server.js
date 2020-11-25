const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

// Allows to read dotenv
require('dotenv').config();

const app = express();

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

//Unprotected Routes
app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/failed', (req, res) => {
  res.send('<h1>Log in Failed :(</h1>');
});

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

//Protected Route.
app.get('/profile', checkUserLoggedIn, (req, res) => {
  res.send(`<h1>${req.user.displayName}'s Profile Page</h1>`);
});

// Declare routes
app.use('/api/auth', require('./routes/api/auth'));

// Require passport config
require('./services/passport');

const PORT = process.env.PORT || 5000;

//Connects or create db and then starts app
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}!`),
);
