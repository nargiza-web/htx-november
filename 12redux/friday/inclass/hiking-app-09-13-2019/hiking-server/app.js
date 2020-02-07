const express = require('express')
const cors = require('cors')
const app = express() 

app.use(cors())
app.use(express.json())

let hikes = [] 

app.get('/hikes',(req,res) => {
    res.json(hikes)
})

app.post('/add-hike',(req,res) => {

    let latitude = req.body.latitude 
    let longitude = req.body.longitude 

    // create a class called Hike 

    // I am going to use anonymous objects 
    let hike = {latitude: latitude, longitude: longitude}
    hikes.push(hike)
    
    res.status(200).send() 

})


app.listen(3001,() => {

})