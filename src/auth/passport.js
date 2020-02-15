const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const User = require('database/MySQL/User/models/User');

// Local Strategy
const localOptions = {
    usernameField: 'email',
    passwordField: 'password',
};

passport.use(
    new LocalStrategy(localOptions, function(email, password, done) {
        return User.findOne({
            where: {
                email: email,
                password: password,
            },
        })
        .asCallback(done);
    })
);

//JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
};

passport.use(
    new JwtStrategy(jwtOptions, function(jwtPayload, done) {
        return User.findOne({
            where: {
                id: jwtPayload.id,
                email: jwtPayload.email,
            },
        })
        .asCallback(done);
    })
);

module.exports = passport;
