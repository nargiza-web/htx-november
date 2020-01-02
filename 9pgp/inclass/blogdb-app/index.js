const express = require('express')
const app = express() 

const mustacheExpress = require('mustache-express')
app.use(express.urlencoded())

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')

// connect to the postgreSQL database 
var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/blogdb';
var db = pgp(connectionString);
//console.log(db)

app.post('/posts',(req,res) => {
    const title = req.body.title 
    const body = req.body.body 

    db.none('INSERT INTO posts(title,body) VALUES($1,$2)',[title, body]).then(() => {
        res.redirect('/posts')
    })

})

app.get('/posts',async (req,res) => {
    const results = await db.any('SELECT post_id, title, body FROM posts;')
    res.render('index',{posts: results})
})

/*
app.get('/posts',(req,res) => {
   
    db.any('SELECT post_id, title, body FROM posts;').then(results => {
        console.log(results)
        res.render('index',{posts: results})
    })

}) */

app.listen(3000,() => {
    console.log('Server is running...')
})