const express = require('express')
const bcrypt = require('bcrypt')

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

const SALT_ROUNDS = 10 

// bcrypt hash password 
//$2b$10$cPXtHzCNepmjdORDzJE.Te.arfKhjwzMRmsRdfr1FTINiALpjgBWu
//bcrypt.hash('cat',10).then(hash => console.log(hash))

//bcrypt.compare('cat','$2b$10$cPXtHzCNepmjdORDzJE.Te.arfKhjwzMRmsWdfr1FTINiALpjgBWu').then(result => console.log(result))

app.get('/register',(req,res) => {
    res.render('register')
})

app.get('/login',(req,res) => {
    res.render('login')
})

app.post('/login',(req,res) => {

    const username = req.body.username 
    const password = req.body.password

    db.one('SELECT user_id, username, password FROM users WHERE username = $1',[username]).then((persistedUser) => {

        if(persistedUser) {
            // check for the password 
            bcrypt.compare(password, persistedUser.password).then(success => {
                if(success) {
                    res.redirect('/posts')
                } else {
                   res.render('login',{message: 'Password incorrect!'})
                }
            })
        } else {
            res.render('login',{message: 'Username or password is incorrect!'})
        }
    })

})

app.post('/register',(req,res) => {

    const username = req.body.username 
    const password = req.body.password 

    bcrypt.hash(password, SALT_ROUNDS).then(hash => {
        db.none('INSERT INTO users(username, password) VALUES($1,$2)',[username, hash]).then(() => {
            res.redirect('/login')
        })
    })

})

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