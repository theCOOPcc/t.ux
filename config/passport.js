const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user')
const mongoose = require('mongoose')
const authCtrl = require('../controllers/auth')

// add this function to the google strategy:
// getJWTAfterGoogleLogin (req, res) <--this is on the front end
// respond with a token from the server
// put token in localStorage
// set the token to the google login

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ googleId: profile.id }, function (err, user) {
                if (err) return done(err);
                if (user) {
                  // console.log('PROFILE FROM GOOGLE', profile)
                  // console.log('USER IN DATABASE', user)
                  // const userToken = authCtrl.createJWT(profile)
                  // console.log('boom token', userToken)
                  // setToken(userToken)
                  // authCtrl.login(user)
                  return done(null, 
                              user,
                              // userToken
                              );
                } else {
                  // we have a new user via OAuth!
                  // console.log(profile)
                  let newUser = new User({
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    email: profile.emails[0].value,
                    googleId: profile.id,
                    assignments: [],
                    avatar: profile._json.picture,
                    userPermissions: 0,
                  });
                  newUser.save(function (err) {
                    if (err) return done(err);
                    return done(null, newUser);
                  });
                }
              });
            }
          )
        );

passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
    done(err, user);
    });
});
