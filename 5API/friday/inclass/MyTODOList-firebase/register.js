
let registerUsernameTextBox = document.getElementById("registerEmailTextBox")
let registerPasswordTextBox = document.getElementById("registerPasswordTextBox")
let registerButton = document.getElementById("registerButton")

let loginUsernameTextBox = document.getElementById("loginEmailTextBox")
let loginPasswordTextBox = document.getElementById("loginPasswordTextBox")
let loginButton = document.getElementById("loginButton")

let signoutButton = document.getElementById("signoutButton")
signoutButton.addEventListener('click',() => {

    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });

})

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("onAuthStateChanged")
        console.log(user)
    } else {
      // User is signed out.
      // ...
    }
  });

loginButton.addEventListener('click',() => {

    let email = loginEmailTextBox.value 
    let password = loginPasswordTextBox.value 

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });

})

registerButton.addEventListener('click',() => {

    let email = registerEmailTextBox.value 
    let password = registerPasswordTextBox.value 

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });

})