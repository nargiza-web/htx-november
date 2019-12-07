
//let nameTextBox = document.getElementById("nameTextBox")

//let nameTextBox = document.querySelector("#div1 .some-class")

//let elements = document.querySelector(".some-class")


// await cannot be inside a function which is not async
function foo() {

  //let response = await fetch('https://jsonplaceholder.typicode.com/posts')
}

//foo()

async function getPostsUsingAsync() {

  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
  } catch(error) {
    console.log(error)
  }
 }

 getPostsUsingAsync()

function getPosts() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response){
    return response.json()
  }).then(function(json){
    console.log(json)
  })


  // ES6
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    //console.log(response)
    let a = 10
    let b = 20
    return response.json()
  }).then(json => {
    console.log(json)
  })

  // ES6

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

}

getPosts()
