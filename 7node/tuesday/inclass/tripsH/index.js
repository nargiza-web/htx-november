const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')
app.get('/',(req,res) => {
res.render('index',{fullName: "Alex", age: 44})
})
app.get('/trips',(req,res) => {
// let trips = ["Denver","Houston","Austin"]
let trips = [{title: "Denver", cost: 100},{title: "Houston", cost: 345},{title: "Houston", cost: 55}]
res.render('trips',{myTrips: trips})
})
app.listen(3000,() => {
console.log("Server is running...")
})