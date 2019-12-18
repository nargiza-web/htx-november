const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

//tell express to use mustache templating engine
app.engine('mustache', mustacheExpress())
//the pages are located in views directory
app.use(express.urlencoded())
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  res.render('index',{fullName: "Alex", age: 44})
})

app.post('/trips', (req, res) => {
  
  let title = req.body.myTitle
  let cost = req.body.myCost
  console.log(title, cost)
  res.send("trips posted")
})

app.get('/trips', (req, res) => {
  let trips = [{title: "Denver", cost: 345}, {title: "Houston", cost: 100}, {title: "Austin", cost: 50}]
  res.render('trips', {myTrips: trips})
})

app.listen(3000, () => {
  console.log("Server is running.....")
})