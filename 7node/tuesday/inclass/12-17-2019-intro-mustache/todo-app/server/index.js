
const express = require('express')
const app = express() 
const cors = require('cors')
const Todo = require('./models/todo')

app.use(express.json())
app.use(cors())

let tasks = [{title: "Wash the car", priority: "high"},{title: "Mow the lawn", priority: "high"},{title: "Do grocery", priority: "low"}]

app.post('/todos',(req,res) => {

    let todo = new Todo(req.body.title, req.body.priority)

    console.log(req.body)
    tasks.push(req.body)
    res.status(200).send() 
    //res.json({success: true, message: 'Task has been inserted..'})
})

app.get('/todos',(req,res) => {
    res.json(tasks)
})

app.listen(3000,() => {
    console.log("Server has started...")
})