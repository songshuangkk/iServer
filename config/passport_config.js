/**
 * Created by songshuang on 15/10/15.
 */
var passport = require('passport'),
    GitHubStrategy = require('passport-github2').Strategy;


var GITHUB_CLIENT_ID = "9beacea4b7aca8cfc30c";
var GITHUB_CLIENT_SECRET = "c26029df63e254e550983e883645053041516563";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's GitHub profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the GitHub account with a user record in your database,
            // and return that user instead.
            return done(null, profile);
        });
    }
));

module.exports = exports = passport;