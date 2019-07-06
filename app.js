// app.js

var Server = require('http').Server
var Express = require('express')
var request = require('request')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var fs = require('fs')
var path = require('path')
var sizeOf = require('image-size')
var cors = require('cors')
var morgan = require('morgan')

// Initialize the app
const app = new Express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))
// Configure support for ejs templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'))
// Initialize the server
const server = new Server(app)

// Define static assets folder
app.use('/static', Express.static(path.join(__dirname, 'src', 'static')))
app.use('/dist', Express.static(path.join(__dirname, 'dist')))

var router = Express.Router();

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
    res.render('index', { 'APP_BUNDLE_URL': appBundleUrl })
})

// Start the server
server.listen(port, err => {
    if (err) {
        console.error(err)
        setTimeout(startServer, 3000);
        return;
    }
    console.info(`Server running on http://localhost:${port} [${env}]`)
})
