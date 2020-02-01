const express = require('express')
const app = express() 
const cors = require('cors')

// add cors as a middleware 
app.use(cors())
app.use(express.json())

let books = [] 

app.post('/books',(req,res) => {
    
    const name = req.body.name 
    const publisher = req.body.publisher 
    const isbn = req.body.isbn 

    let book = {name, publisher, isbn}

    // database code to insert into db

    books.push(book)

    res.status(200).send() 
})

app.get('/books',(req,res) => {
    res.json(books)
})

app.listen(8080,() => {
    console.log('Server is running...')
})