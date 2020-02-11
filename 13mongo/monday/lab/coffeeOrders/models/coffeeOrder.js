const mongoose = require('mongoose')

var orderSchema = new mongoose.Schema({
  name: String, 
  date: Date,
  coffeetype: String,
  email: String,
  quantity: Number
})

var coffeeOrder = mongoose.model('Order', orderSchema)

module.exports = coffeeOrder