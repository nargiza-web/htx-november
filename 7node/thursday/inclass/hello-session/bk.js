const express = require('express')
const app = express() 
const path = require('path')
const mustacheExpress = require('mustache-express')
var session = require('express-session')

// initialize session 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

const VIEWS_PATH = path.join(__dirname,'/views')
console.log(VIEWS_PATH)

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))

// the pages are located in views directory
app.set('views',VIEWS_PATH)
// extension will be .mustache
app.set('view engine','mustache')

function logger(req,res,next) {
    console.log("logger")
    next() 
}

app.post('/increment',(req,res) => {
    if(req.session) {
        req.session.counter += 1 
    }
    res.redirect('/')
})

app.get('/search',(req,res) => {
    let search = req.query.q 
    res.send(search)
})

app.get('/movies',(req,res) => {
    res.render('movies',{movies: []})
})

app.get('/',logger,(req,res) => {
    console.log("get request at root")
    res.render('index',{counter: req.session.counter})
})

app.listen(3000,() => {
    console.log("Server is running...")
})