
const express = require('express')
const router = express.Router() 

router.get('/banks',(req,res) => {
    res.json([{name: 'Wells Fargo', amount: 100}])   
})

router.get('/credits',(req,res) => {
    res.send('Credit ACCOUNTS')
})

router.get('/my-savings-accounts',(req,res) => {
    res.send('MY SAVINGS ACCOUNT')
})

module.exports = router