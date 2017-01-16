var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');
module.exports = function() {
    passport.use(new LocalStrategy(function(email, password, done) {
        console.log('chui vo day' + email);
        
        User.findOne({
            email: email
        }, function(err, user) {
            console.log(JSON.stringify(user));
            console.log(err);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }
            // authenticate
            if (!user.authenticate(password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }));
};