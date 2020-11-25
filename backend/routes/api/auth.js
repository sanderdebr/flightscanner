const express = require('express');
const router = express.Router();
const passport = require('passport');

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
  function (req, res) {
    res.redirect('/profile');
  },
);

module.exports = router;
