const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const tripsRouter = require('./routes/trips')
const usersRouter = require('./routes/users')
const path = require('path')

// Everything inside public folder is available at the ROOT LEVEL 
//app.use(express.static('public')) // // localhost:3000/site.css

app.use('/css',express.static('public')) // // localhost:3000/css/site.css
app.use('/js',express.static('public')) // // localhost:3000/js/client.js
app.use(express.static('public')) // // localhost:3000/images/image1.png


// localhost:3000/site.css

global.trips = []

// middleware 
app.use(express.urlencoded())

app.use('/trips',tripsRouter)
app.use('/users',usersRouter)

console.log(__dirname) // /Users/azamsharp/Desktop/trips
const VIEWS_PATH = path.join(__dirname, '/views')
// /Users/azamsharp/Desktop/trips/views
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