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
const envFilePath =
    process.env.NODE_ENV === 'production'
        ? '.env.production'
        : '.env.development';
if (fs.existsSync(envFilePath)) {
    const envLoadResult = require('dotenv').config({ path: envFilePath });
    if (envLoadResult.error) {
        console.log(envLoadResult.error);
    } else {
        console.log(`env file '${envFilePath}' loaded successfully.`);
        if (process.env.NODE_ENV === 'development') {
            console.log('[BACK-END]', envLoadResult.parsed);
        }
    }
} else {
    console.log(`env file '${envFilePath}' does not exist.`);
}

// Database connections
// var Secret = require('utils/Secret')
const MySqlConn = require('database/MySQL/Connection');

// Define MySQL USER model relations
const UserModelRelations = require('database/MySQL/User/ModelRelations');
UserModelRelations.defineRelations();
// Define MySQL MyApp's model relations
// const MyAppModelRelations = require('database/MySQL/MyApp/ModelRelations');
// MyAppModelRelations.defineRelations();

// Auth
const AuthRoute = require('auth/AuthRoute');
/******************************
    MySQL models and routes
*******************************/
// USER models route
const StkbdUserRoute = require('database/MySQL/User/routes/UserRoute');
const StkbdUserLayoutRoute = require('database/MySQL/User/routes/UserLayoutRoute');
const StkbdGroupRoute = require('database/MySQL/User/routes/GroupRoute');
const StkbdGroupUserRoute = require('database/MySQL/User/routes/GroupUserRoute');
const StkbdGroupPermissionRoute = require('database/MySQL/User/routes/GroupPermissionRoute');
const StkbdPermissionRoute = require('database/MySQL/User/routes/PermissionRoute');
// MyApp's models route

/******************************
    Firestore models and routes
*******************************/
// USER models route
const FirestoreUserRoute = require('database/Firestore/User/routes/UserRoute');

/******************************
    MongoDB models and routes
*******************************/
// USER models route
const MongoDbUserRoute = require('database/MongoDB/User/routes/UserRoute');


// GraphQL
const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql');
const graphqlHelper = require('@stickyboard/graphql-helper');

function importFilesInPath(targetPath) {
    if (fs.existsSync(targetPath)) {
        return fs.readdirSync(targetPath).map((file) => {
            return require(`${targetPath}/${file}`);
        });
    }

    return [];
}

const mySqlBasePath = `${process.env.NODE_PATH}/database/MySQL`;
// Import MySQL User models
const mySqlUserModelsPath = path.resolve(mySqlBasePath, 'User', 'models');
const mySqlUserModels = importFilesInPath(mySqlUserModelsPath);
// Import MySQL MyApp models
const mySqlMyAppModelsPath = path.resolve(mySqlBasePath, 'MyApp', 'models');
const mySqlMyAppModels = importFilesInPath(mySqlMyAppModelsPath);

const sequelizeModels = [...mySqlUserModels, ...mySqlMyAppModels];

const graphqlBasePath = `${process.env.NODE_PATH}/graphql`;
const basePathForCustom = path.resolve(graphqlBasePath, 'custom');
// Import custom schema files
const customSchemaPath = path.resolve(basePathForCustom, 'schemas');
const customSchemas = importFilesInPath(customSchemaPath);
// Import custom resolver files
const customResolverPath = path.resolve(basePathForCustom, 'resolvers');
const customResolvers = importFilesInPath(customResolverPath);

const { buildSchemaFilePath, resolvers } = graphqlHelper.sync(
    fs,
    path,
    graphqlBasePath,
    require('sequelize'),
    sequelizeModels,
    customSchemas,
    customResolvers
);
const graphqlSchema = makeExecutableSchema({
    typeDefs: require(buildSchemaFilePath),
    resolvers: resolvers,
});




// // GraphQL
// const { makeExecutableSchema } = require('graphql-tools');
// const graphqlHTTP = require('express-graphql');
// const graphqlHelper = require('@stickyboard/graphql-helper');
//
// const sequelizeModels = [
//     // MySQL USER models
//     require('database/MySQL/User/models/User'),
//     require('database/MySQL/User/models/UserProfile'),
//     require('database/MySQL/User/models/UserLayout'),
//     require('database/MySQL/User/models/Group'),
//     require('database/MySQL/User/models/GroupUser'),
//     require('database/MySQL/User/models/Permission'),
//     require('database/MySQL/User/models/GroupPermission'),
//     // MySQL MyApp's models
//     require('database/MySQL/MyApp/models/User'),
//     require('database/MySQL/MyApp/models/UserPost'),
// ];
//
// const graphqlBasePath = `${process.env.NODE_PATH}/graphql`;
// const schemaPath = graphqlHelper.syncSchema(
//     fs,
//     path,
//     graphqlBasePath,
//     sequelizeModels,
//     { overwrite: false }
// );
// const typeDefs = require(schemaPath);
// const resolvers = graphqlHelper.generateResolvers(sequelizeModels);
// const graphqlSchema = makeExecutableSchema({ typeDefs, resolvers });

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
const stickyboardRouter = Express.Router();
// User
// stickyboardRouter.all('/stkbd/user/:userId/', Secret.verifyToken);
stickyboardRouter.get('/stkbd/user/$', StkbdUserRoute.readAll);
stickyboardRouter.get('/stkbd/user/:userId/$', StkbdUserRoute.read);
stickyboardRouter.get('/stkbd/user/:userId/group/$', StkbdUserRoute.readGroup);
stickyboardRouter.get('/stkbd/user/:userId/permission/$', StkbdUserRoute.readPermissions);
stickyboardRouter.put('/stkbd/user/:userId/$', StkbdUserRoute.update);
stickyboardRouter.put('/stkbd/user/:userId/password/$', StkbdUserRoute.updatePassword);
stickyboardRouter.delete('/stkbd/user/:userId/$', StkbdUserRoute.delete);

// User Layout
stickyboardRouter.post('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.create);
stickyboardRouter.get('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.read);
stickyboardRouter.put('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.update);
stickyboardRouter.delete('/stkbd/user/:userId/layout/$', StkbdUserLayoutRoute.delete);

// Group
stickyboardRouter.get('/stkbd/group/$', StkbdGroupRoute.readAll);
stickyboardRouter.get('/stkbd/group/:groupId/$', StkbdGroupRoute.read);
stickyboardRouter.post('/stkbd/group/$', StkbdGroupRoute.create);
stickyboardRouter.put('/stkbd/group/:groupId/$', StkbdGroupRoute.update);
stickyboardRouter.delete('/stkbd/group/:groupId/$', StkbdGroupRoute.delete);

// Group User
stickyboardRouter.get('/stkbd/group/:groupId/user/$', StkbdGroupUserRoute.readAll);
stickyboardRouter.get('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.read);
stickyboardRouter.post('/stkbd/group/:groupId/user/$', StkbdGroupUserRoute.create);
stickyboardRouter.put('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.update);
stickyboardRouter.delete('/stkbd/group/:groupId/user/:userId/$', StkbdGroupUserRoute.delete);

// Group Permission
stickyboardRouter.get('/stkbd/group/:groupId/permission/$', StkbdGroupPermissionRoute.readAll);
stickyboardRouter.get('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.read);
stickyboardRouter.post('/stkbd/group/:groupId/permission/$', StkbdGroupPermissionRoute.create);
stickyboardRouter.put('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.update);
stickyboardRouter.delete('/stkbd/group/:groupId/permission/:permissionId/$', StkbdGroupPermissionRoute.delete);

// Permission
stickyboardRouter.get('/stkbd/permission/$', StkbdPermissionRoute.readAll);
stickyboardRouter.get('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.read);
stickyboardRouter.post('/stkbd/permission/$', StkbdPermissionRoute.create);
stickyboardRouter.put('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.update);
stickyboardRouter.delete('/stkbd/permission/:permissionId/$', StkbdPermissionRoute.delete);

/******************************
    Database API routing
*******************************/
const databaseRouter = Express.Router();
databaseRouter.get('/database/mysql/user/$', StkbdUserRoute.readAll);
databaseRouter.get('/database/firestore/user/$', FirestoreUserRoute.readAll);
databaseRouter.get('/database/mongodb/user/$', MongoDbUserRoute.readAll);

/******************************
    MyApp's API routing
*******************************/
// Your App's API route
const myAppRouter = Express.Router();
// myAppRouter.get('/myapp/sample/$', MyAppSampleRoute.readAll);
// myAppRouter.get('/myapp/sample/$', MyAppSampleRoute.readAll);
// myAppRouter.get('/myapp/sample/$', MyAppSampleRoute.readAll);
// myAppRouter.get('/myapp/sample/$', MyAppSampleRoute.readAll);

app.use(
    '/api',
    // API router (public)
    databaseRouter,
    // API router (authenticaion required)
    passport.authenticate('jwt', { session: false }),
    stickyboardRouter,
    myAppRouter,
);

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
