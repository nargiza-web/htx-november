// BISMILLAHI RAHMANI RAHIM
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 3000;
global.trips = []

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded())
app.set('views', './views')
app.set('view engine', 'mustache')
app.get('/', (req, res) => {
  res.render('trips')
})
app.get('/users/trips', (req, res) => {
  res.render('trips', {trips: trips})
})
app.post('/users/add-trip', (req, res) => {
  let title = req.body.title
  let imageURL = req.body.imageURL
  let departure = req.body.departure
  let myReturn = req.body.myReturn
  let trip = {title: title, image: imageURL, departure: departure, myReturn: myReturn }
  //res.send("Your trip has been added, almost there:D ")
  trips.push(trip)
  res.redirect('/users/trips')
})

app.post('/users/delete-trip', (req, res) =>{
  let city = req.body.city
  trips = trips.filter(trip => trip.title != city)
  res.redirect('/users/trips')
})

app.listen(PORT, () => {
  console.log("Server is running on PORT " + PORT)
})