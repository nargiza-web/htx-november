// Bismillah her hayirin basidir biz dahi basta ona baslariz!
const express = require('express')
const session = require('express-session')
const app = express();
const PORT = 3000;
const mustacheExpress = require('mustache-express');
global.trips =[];
const mainRouter = require('./routes/main')
const tripRouter = require('./routes/trip')

global.users = [{username: 'nargiza', password: 'test1234'},
                {username: 'john', password: 'test1234'}]
                
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Middleware to Authenticate
function authenticate(req, res, next){
  if(req.session) {
    if(req.session.isAuthenticated){
      next()
    } else {
      res.redirect('/login')
    }
  }
}
app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use('/trip', authenticate, tripRouter)
app.use('/', mainRouter)



app.listen(PORT, (req, res) => {
  console.log("Listening to PORT: " + PORT)
})
