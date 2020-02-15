// app.js

var Server = require('http').Server;
var Express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var path = require('path');
var sizeOf = require('image-size');
var cors = require('cors');
var morgan = require('morgan');

// Load .env configuration
const envFilePath = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
const envLoadResult = require('dotenv').config({ path: envFilePath });
if (envLoadResult.error) {
    throw envLoadResult.error;
}
// console.log(envLoadResult.parsed);

// Load StickyBoard config file
const stickyboardConfig = require('./stickyboard.config');

// Database connections
// var Secret = require('utils/Secret')
const MySqlConn = require('database/connections/MySqlConn');

// Define MySQL model relations
const UserModelRelations = require('database/MySQL/User/ModelRelations');
UserModelRelations.defineRelations();

// Auth
const AuthRoute = require('auth/AuthRoute');
// MySQL USER models route
const StkbdUserRoute = require('database/MySQL/User/routes/UserRoute');
const StkbdUserLayoutRoute = require('database/MySQL/User/routes/UserLayoutRoute');
const StkbdGroupRoute = require('database/MySQL/User/routes/GroupRoute');
const StkbdGroupUserRoute = require('database/MySQL/User/routes/GroupUserRoute');
const StkbdGroupPermissionRoute = require('database/MySQL/User/routes/GroupPermissionRoute');
const StkbdPermissionRoute = require('database/MySQL/User/routes/PermissionRoute');
// MySQL MyApp's models route

// Initialize the app
const app = new Express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
// Configure support for ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
// Initialize the server
const server = new Server(app);

// Define static assets folder
app.use('/static', Express.static(path.join(__dirname, 'src', 'static')));
app.use('/dist', Express.static(path.join(__dirname, 'dist')));

// Passport
const passport = require('auth/passport');
app.use(passport.initialize());

/******************************
    Auth routing
*******************************/
const authRouter = Express.Router();
// Auth
authRouter.post('/signup/$', AuthRoute.signUp);
authRouter.post('/signin/$', AuthRoute.signIn);
authRouter.post('/signout/$', AuthRoute.signOut);
app.use('/auth', authRouter);

/******************************
    StickyBoard API routing
*******************************/
const router = Express.Router();
// User
// router.all('/stkbd/user/:userId/', Secret.verifyToken);
router.get('/stkbd/user/$', StkbdUserRoute.readAll);
router.get('/stkbd/user/:userId/$', StkbdUserRoute.read);
router.get('/stkbd/user/:userId/group/$', StkbdUserRoute.readGroup);
router.get('/stkbd/user/:userId/permission/$', StkbdUserRoute.readPermissions);
router.put('/stkbd/user/:userId/$', StkbdUserRoute.update);
router.put('/stkbd/user/:userId/password/$', StkbdUserRoute.updatePassword);
router.delete('/stkbd/user/:userId/$', StkbdUserRoute.delete);

// User Layout
router.post('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.create);
router.get('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.read);
router.put('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.update);
router.delete('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.delete);

// Group
router.get('/stkbd/group/$', StkbdGroupRoute.readAll);
router.get('/stkbd/group/:groupId/$', StkbdGroupRoute.read);
router.post('/stkbd/group/$', StkbdGroupRoute.create);
router.put('/stkbd/group/:groupId/$', StkbdGroupRoute.update);
router.delete('/stkbd/group/:groupId/$', StkbdGroupRoute.delete);

// Group User
router.get('/stkbd/group/:groupId/user/$', StkbdGroupUserRoute.readAll);
router.get('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.read);
router.post('/stkbd/group/:groupId/user/$', StkbdGroupUserRoute.create);
router.put('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.update);
router.delete('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.delete);

// Group Permission
router.get('/stkbd/group/:groupId/permission/$', StkbdGroupPermissionRoute.readAll);
router.get('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.read);
router.post('/stkbd/group/:groupId/permission/$', StkbdGroupPermissionRoute.create);
router.put('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.update);
router.delete('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.delete);

// Permission
router.get('/stkbd/permission/$', StkbdPermissionRoute.readAll);
router.get('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.read);
router.post('/stkbd/permission/$', StkbdPermissionRoute.create);
router.put('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.update);
router.delete('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.delete);

/******************************
    MyApp's API routing
*******************************/

app.use('/api', passport.authenticate('jwt', { session: false }), router);

// Set port and running environment
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'production'
delete process.env.BROWSER

// Set app bundle URL depends on running environment
var appBundleUrl
switch (env) {
case 'production':
    appBundleUrl = '/dist/app.bundle.js'
    break
case 'development':
    appBundleUrl = 'http://localhost:8080/app.bundle.js'
    break
}

app.get('*', function (req, res) {
    res.render('index', { ...stickyboardConfig, 'APP_BUNDLE_URL': appBundleUrl });
});

// WARNING: Do not use {force: true} option! It drops all data!
MySqlConn.sync().then(function() {
    // Start the server
    server.listen(port, err => {
        if (err) {
            console.error(err);
            setTimeout(startServer, 3000);
            return;
        }
        console.info(`Server running on http://localhost:${port} [${env}]`);
    });
});
