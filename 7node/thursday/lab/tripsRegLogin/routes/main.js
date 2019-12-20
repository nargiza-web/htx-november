const express = require('express')
const router = express.Router()

function loginRedirect(req, res, next) {
  if(req.session.username){
    res.redirect('/dashboard')
  } else {
    next()
  }
}
router.get('/', (req, res) => {
  res.render('main', {trips: trips})
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  let user = { username: req.body.username, password: req.body.password}
  users.push.user
  res.redirect('/dashboard')
})

router.get('/dashboard', (req, res) => {
  res.render("dashboard")
})

router.post('/login', (req, res) => {
  let username = req.body.username
  let password = req.body.password
  console.log(username, password)
  let persistedUser = users.find((user) => {
    return user.username == username && user.password == password
  });
  console.log(persistedUser);
  if(persistedUser){
    //start the session
    if (req.session) {
      req.session.isAuthenticated = true
    }
    res.redirect('/dashboard')
  } else {
    res.redirect('/login')
  }
  
})


module.exports  = router