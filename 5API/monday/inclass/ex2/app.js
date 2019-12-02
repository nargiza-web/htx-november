let postsUL = document.getElementById("postUL");

const url = "https://jasonplaceholder.typicode.com/posts"

//create an object of XMLHttpRequest
let request = new XMLHttpRequest()

request.addEventListener('load', function(){
  //this is XMLHttpRequest object
  //console.log(this.responseText)
  
  //parse response text into a JS object
  let posts = JSON.parse(this.responseText)
  
  let postItems = posts.map((post) => {
    return `<li>${post.title}</li>`
  })
  
  //assign to the ul
  postsUL.innerHTML = postItems.join(' ')
})

/*
request.addEventListener('load', (e) => {
  console.log(e.target.responseText)
})
*/

request.open('GET', url)
request.send()