// Bismillahi Rahmani Rahim
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/blogdb'
const db = pgp(connectionString)
const path = require('path')
const VIEWS_PATH = path.join(__dirname, '/views')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

app.use(express.urlencoded())
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/posts', async (req, res) => {
  const results = await db.any('SELECT post_id, title, body FROM posts;')
  res.render('posts', {posts: results})
})

app.post('/posts',  (req, res) => {
  let title = req.body.title
  let body = req.body.body
  
   db.none('INSERT INTO posts(title, body) VALUES($1, $2)', [title, body])
     .then(() => {
       res.redirect('/posts')
     })
})

app.get('/posts/edit/:postId', async (req, res) => {
  let postId = req.params.postId
  
  let post = await db.one('SELECT post_id, title, body FROM posts WHERE post_id = $1', [postId])
  res.render('edit-post', post)
})

app.post('/edit-post', async(req,res) => {
  let title = req.body.title
  let body = req.body.body
  let postId = req.body.postId
  
  await db.none('UPDATE posts SET title = $1, body = $2 WHERE  post_id = $3', [title, body, postId])
  res.redirect('/posts')
})

app.post('/posts/delete-post', async (req, res) => {
  let postId = req.body.postId
  
  await db.none('DELETE FROM posts WHERE post_id = $1', [postId])
  res.redirect('/posts')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register',  (req, res) => {
   let firstName = req.body.firstName
   let lastName =req.body.lastName
   let username = req.body.username
   let password = req.body.password
   
   db.oneOrNone('SELECT user_id FROM users WHERE username = $1', [username])
   .then((user) => {
     if(user) {
       res.render('register', {message: "User name already exists"})
     } else {
       
      bcrypt.hash(password, SALT_ROUNDS, function(error, hash){
        if(error == null) {
          db.none('INSERT INTO users(first_name, last_name, username, password) VALUES($1, $2, $3, $4)', [firstName, lastName, username, hash])
          .then(()=> {
            res.render('login')
          })
        }
      })
     }
   })
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password
  
  db.oneOrNone('SELECT user_id, username, password FROM users WHERE username =$1', [username])
    .then((user) => {
      if(user){
        bcrypt.compare(password, user.password, function(error, result){
          if(result){
            res.send("you are theoretically logged in")
          } else {
            res.render('login', {message: "Invalid username or password"})
          }
        })
      } else {
        res.render('login', {message: "Invalid username or password"})
      }
    })
})

app.listen(3000, (req, res) => {
  console.log("Server is running....")
})