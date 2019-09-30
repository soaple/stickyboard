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
const envFilePath = process.env.NODE_ENV === 'production' ? '.env' : '.env.development';
const envLoadResult = require('dotenv').config({ path: envFilePath });
if (envLoadResult.error) {
    throw envLoadResult.error;
}
console.log(envLoadResult.parsed);

// Database connections
// var Secret = require('./src/utils/Secret')
var MySqlConn = require('./src/database/connections/MySqlConn');

// Define MySQL model relations
var ModelRelations = require('./src/database/models/MySQL/ModelRelations');
ModelRelations.defineRelations();

// MySQL models route
var UserRoute = require('./src/database/models/MySQL/User/routes/UserRoute');
// var UserProfileRoute = require('./src/database/models/MySQL/User/routes/UserProfileRoute');
var UserLayoutRoute = require('./src/database/models/MySQL/User/routes/UserLayoutRoute');
var PageRoute = require('./src/database/models/MySQL/User/routes/PageRoute');
var GroupRoute = require('./src/database/models/MySQL/User/routes/GroupRoute');
var GroupUserRoute = require('./src/database/models/MySQL/User/routes/GroupUserRoute');
var GroupPermissionRoute = require('./src/database/models/MySQL/User/routes/GroupPermissionRoute');
var PermissionRoute = require('./src/database/models/MySQL/User/routes/PermissionRoute');

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

var router = Express.Router();

/******************
    API routing
******************/
// User
router.post('/user/signup/$', function (req, res) { UserRoute.signUp(req, res) });
router.post('/user/signin/$', function (req, res) { UserRoute.signIn(req, res) });
router.post('/user/signout/$', function (req, res) { UserRoute.signOut(req, res) });
router.all('/user/:userId/', function (req, res, next) { Secret.verifyToken(req, res, next) });
router.get('/user/$', function (req, res) { UserRoute.readAll(req, res) });
router.get('/user/:userId/$', function (req, res) { UserRoute.read(req, res) });
router.get('/user/:userId/group/$', function (req, res) { UserRoute.readGroup(req, res) });
router.get('/user/:userId/permission/$', function (req, res) { UserRoute.readPermissions(req, res) });
router.put('/user/:userId/$', function (req, res) { UserRoute.update(req, res) });
router.put('/user/:userId/password/$', function (req, res) { UserRoute.updatePassword(req, res) });
router.delete('/user/:userId/$', function (req, res) { UserRoute.delete(req, res) });

// User profile

// User Layout
router.post('/user/:userId/layout/$', function (req, res) { UserLayoutRoute.create(req, res) });
router.get('/user/:userId/layout/$', function (req, res) { UserLayoutRoute.read(req, res) });
router.put('/user/:userId/layout/$', function (req, res) { UserLayoutRoute.update(req, res) });
router.delete('/user/:userId/layout/$', function (req, res) { UserLayoutRoute.delete(req, res) });

// Page
router.post('/page/:pageId/$', function (req, res) { PageRoute.create(req, res) });
router.get('/page/:pageId/$', function (req, res) { PageRoute.read(req, res) });
router.put('/page/:pageId/$', function (req, res) { PageRoute.update(req, res) });
router.delete('/page/:pageId/$', function (req, res) { PageRoute.delete(req, res) });

// Group
router.get('/group/$', function (req, res) { GroupRoute.readAll(req, res) });
router.get('/group/:groupId/$', function (req, res) { GroupRoute.read(req, res) });
router.post('/group/$', function (req, res) { GroupRoute.create(req, res) });
router.put('/group/:groupId/$', function (req, res) { GroupRoute.update(req, res) });
router.delete('/group/:groupId/$', function (req, res) { GroupRoute.delete(req, res) });

// Group User
router.get('/group/:groupId/user/$', function (req, res) { GroupUserRoute.readAll(req, res) });
router.get('/group/:groupId/user/:userId/$', function (req, res) { GroupUserRoute.read(req, res) });
router.post('/group/:groupId/user/$', function (req, res) { GroupUserRoute.create(req, res) });
router.put('/group/:groupId/user/:userId/$', function (req, res) { GroupUserRoute.update(req, res) });
router.delete('/group/:groupId/user/:userId/$', function (req, res) { GroupUserRoute.delete(req, res) });

// Group Permission
router.get('/group/:groupId/permission/$', function (req, res) { GroupPermissionRoute.readAll(req, res) });
router.get('/group/:groupId/permission/:permissionId/$', function (req, res) { GroupPermissionRoute.read(req, res) });
router.post('/group/:groupId/permission/$', function (req, res) { GroupPermissionRoute.create(req, res) });
router.put('/group/:groupId/permission/:permissionId/$', function (req, res) { GroupPermissionRoute.update(req, res) });
router.delete('/group/:groupId/permission/:permissionId/$', function (req, res) { GroupPermissionRoute.delete(req, res) });

// Permission
router.get('/permission/$', function (req, res) { PermissionRoute.readAll(req, res) });
router.get('/permission/:permissionId/$', function (req, res) { PermissionRoute.read(req, res) });
router.post('/permission/$', function (req, res) { PermissionRoute.create(req, res) });
router.put('/permission/:permissionId/$', function (req, res) { PermissionRoute.update(req, res) });
router.delete('/permission/:permissionId/$', function (req, res) { PermissionRoute.delete(req, res) });

app.use('/api', router)

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
    console.log(appBundleUrl)
    res.render('index', { 'APP_BUNDLE_URL': appBundleUrl });
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
