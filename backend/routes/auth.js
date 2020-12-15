const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../middleware/auth');

// @route
// @desc    Redirect to Google, wait for callback, scope determines which Google info we'll get
// @access  Public
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

// @route
// @desc    Redirect to Google, wait for callback
// @access  Public
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (request, response) {
    // response.redirect('http://localhost:8080');
    response.redirect(process.env.ALLOWED_ORIGIN);
  },
);

// @route
// @desc    Returns current user information
// @access  Protected
router.get('/user', auth, (request, response) => {
  response.send(request.user);
});

// @route
// @desc    Redirect to Google, wait for callback
// @access  Public
router.get('/logout', (request, response) => {
  request.logout();
  response.send({ message: 'User logged out' });
});

module.exports = router;
