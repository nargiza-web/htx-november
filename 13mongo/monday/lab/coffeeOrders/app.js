const express = require('express')
const mongoose = require('mongoose')
const app = express()
//const bodyParser = require('body-parser')
const coffeeOrder = require('./models/coffeeOrder')
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/coffeeOrder', {useNewUrlParser: true}, (error) => {
  if(error){
    console.log('Unable to connect to the database!')
  } else {
    console.log('Connected to the database!')
  }
})

app.use(express.json())
//app.use(bodyParser.json())

app.post('/api/add-coffee-order', async (req, res) => {
  const name = req.body.name
  const coffeetype = req.body.coffeetype
  const email = req.body.email
  const quantity = req.body.quantity
  //const date = req.body.Date()
  
  let yourCoffeeOrder = new coffeeOrder({
    name: name,
    coffeetype: coffeetype,
    email: email, 
    quantity: quantity,
    date: new Date() 
  })
  
let savedCoffeeOrder = await yourCoffeeOrder.save()
  if(savedCoffeeOrder){
    res.json(savedCoffeeOrder)
  } else {
    res.status(500).json({message: 'Unable to save a shopping list'})
  }
})

app.get('/list-orders', (req, res) => {
  coffeeOrder.find({}).then(posts => res.json(posts))
})


app.listen(PORT, () => {
  console.log("Bismillah her hayirin basidir, server is running...")
})