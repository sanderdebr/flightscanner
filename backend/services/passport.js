const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '466563969108-srm1pdv02hm0rtc481ar6772dd1jru3s.apps.googleusercontent.com',
      clientSecret: 'pi8v1m7x8tnCOnsA4VYYpFx1',
      callbackURL:
        'https://sanderdev.nl/flightscanner-api/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);
