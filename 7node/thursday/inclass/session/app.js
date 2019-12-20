app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))