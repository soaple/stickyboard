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

// Database connections
// var Secret = require('utils/Secret')
const MySqlConn = require('database/connections/MySqlConn');

// Define MySQL USER model relations
const UserModelRelations = require('database/MySQL/User/ModelRelations');
UserModelRelations.defineRelations();
// Define MySQL MyApp's model relations
// const MyAppModelRelations = require('database/MySQL/MyApp/ModelRelations');
// MyAppModelRelations.defineRelations();

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

// GraphQL
const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql');
const graphqlHelper = require('@stickyboard/graphql-helper');

const sequelizeModels = [
    // MySQL USER models
    require('database/MySQL/User/models/User'),
    require('database/MySQL/User/models/UserProfile'),
    require('database/MySQL/User/models/UserLayout'),
    require('database/MySQL/User/models/Group'),
    require('database/MySQL/User/models/GroupUser'),
    require('database/MySQL/User/models/Permission'),
    require('database/MySQL/User/models/GroupPermission'),
    // MySQL MyApp's models
    require('database/MySQL/MyApp/models/User'),
    require('database/MySQL/MyApp/models/UserPost'),
];

const graphqlBasePath = `${process.env.NODE_PATH}/graphql`;
const schemaPath = graphqlHelper.syncSchema(
    fs,
    path,
    graphqlBasePath,
    sequelizeModels,
    { overwrite: false }
);
const typeDefs = require(schemaPath);
const resolvers = graphqlHelper.generateResolvers(sequelizeModels);
const graphqlSchema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the app
const app = new Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
// Configure support for html using ejs templates
app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
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

/******************************
    GraphQL routing
*******************************/
app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        graphiql: true,
    })
);

// Set port and running environment
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
const isWebpackDevServerMode = process.env.WEBPACK_DEV_SERVER_MODE === 'true';
delete process.env.BROWSER;

if (isWebpackDevServerMode) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const historyApiFallback = require('connect-history-api-fallback');
    const config = require('./webpack.config.js');
    const compiler = webpack(config);
    const webpackInstance = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    });

    app.use(webpackInstance);
    app.use(historyApiFallback());
    app.use(webpackInstance);
} else {
    // Serving .js file from gzip file (WebPack CompressionPlugin)
    app.get('*.js', function (req, res, next) {
        req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

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
