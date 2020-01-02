let express = require('express')
let app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

console.log(__dirname + '/index.html')

io.on('connection',(socket) => {
    console.log("User is connected")

    socket.on('Houston',(message) => {
        console.log(message)
        // sends to everyone including the original sender 
        //io.emit('Houston',message)
        // Only sends the message to the original sender
        //socket.emit('Houston',message)
        // the broadcast will NOT send the message to the originating client
        socket.broadcast.emit('Houston',message)
    })
})

app.get('/',(req,res) => {
    // return an html page 
    res.sendFile(__dirname + '/index.html')
})

http.listen(3000,() => {

})