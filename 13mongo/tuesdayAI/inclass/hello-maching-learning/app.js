const express = require('express')
const app = express() 
const path = require('path')

app.use(express.static('public'))

app.get('/video',(req,res) => {
    res.sendFile(path.join(__dirname+'/public/camera.html'));
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(3000,() => {
    console.log('Server is running...')
})