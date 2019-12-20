const express = require('express')
const app = express() 
const path = require('path')
const mustacheExpress = require('mustache-express')
// import trips router 
const tripsRouter = require('./routes/trips')
// import index router 
const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')
var session = require('express-session')

global.users = [{username: 'johndoe', password: 'password'}, {username: 'mary', password: 'password'}]

app.use(express.urlencoded())

// MIDDLEWARE to AUTHENTICATE
function authenticate(req,res,next) {
    if(req.session) {
        if(req.session.isAuthenticated) {
            next()
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
}

// initialize session 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

// middleware 
// all trips routes will be handled by tripsRouter 
//app.use(authenticate)
//app.all('/trips/*',authenticate)
app.use('/trips',authenticate,tripsRouter)
app.use('/movies',moviesRouter)
app.use('/',indexRouter)


const VIEWS_PATH = path.join(__dirname,'/views')
console.log(VIEWS_PATH)


// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))

// the pages are located in views directory
app.set('views',VIEWS_PATH)
// extension will be .mustache
app.set('view engine','mustache')

app.listen(3000,() => {
    console.log("Server is running...")
})