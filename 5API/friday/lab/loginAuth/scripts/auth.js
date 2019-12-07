// get data 
db.collection('guides').get().then(snapshot => {
  setupGuides(snapshot.docs);
})

// listen for auth status changes
auth.onAuthStateChanged( user => {
  if (user) {
    console.log('user logged in: ', user)
  } else {
    console.log("user logged out")
  }
})

// signup the user
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // now get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  
  //sign up the user and fire it on database
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    
    // close the modal 
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  })
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
})

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value
  const password = loginForm['login-password'].value
  
  // now let him login
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    
    // close the login modal and reset the form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset()
    
  })
})




