const passport = require('passport');
const jwt = require('jsonwebtoken');

const StatusCode = require('network/StatusCode');
const User = require('database/MySQL/User/models/User');

const AuthRoute = {
    signUp: function(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        })
        .then(function(result) {
            res.json(result);
        })
        .catch(function(err) {
            if (
                err.name === 'SequelizeUniqueConstraintError' &&
                err.fields.email !== undefined
            ) {
                res.status(StatusCode.EMAIL_ALREADY_TAKEN).json({
                    msg: 'The email you entered already exist',
                });
            } else if (
                err.name === 'SequelizeValidationError' &&
                err.errors[0].path === 'email'
            ) {
                res.status(StatusCode.INVALID_EMAIL_FORMAT).json({
                    msg: 'Invalid email format',
                });
            } else {
                res.status(StatusCode.ACCOUNT_DOES_NOT_EXIST).json({
                    msg: 'Account does not exist',
                });
            }
        });
    },

    signIn: function(req, res) {
        passport.authenticate('local', { session: false }, (err, user) => {
            if (err || !user) {
                return res.status(StatusCode.BAD_REQUEST).json({
                    message: 'Something went wrong',
                    user: user,
                });
            }
            req.login(user, { session: false }, (err) => {
                if (err) {
                    res.send(err);
                }
                // jwt.sign('token내용', 'JWT secretkey')
                const token = jwt.sign(
                    user.toJSON(),
                    process.env.SECRET_KEY,
                    { expiresIn: '24h' });

                return res.status(StatusCode.OK)
                .cookie('token', token, { secure: false, maxAge: 86400000, httpOnly: false })
                .cookie('userId', user.id, { secure: false, maxAge: 86400000, httpOnly: false })
                .json({
                    user: user,
                    token: token,
                });
            });
        })(req, res);
    },

    signOut: function(req, res) {},
};

module.exports = AuthRoute;
