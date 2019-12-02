const url = "https://jsonplaceholder.typicode.com/photos"
let postUL = document.getElementById("postUL")
let request = new XMLHttpRequest()

request.addEventListener('load', function(){
  let posts = JSON.parse(this.responseText)
  
  let postItems = posts.map((post) => {
    return `
    <ul>
    <img src='${post.thumbnailUrl}'/>
    <li>${post.title}</li>
    </ul>`
  });
  postUL.innerHTML = postItems.join(' ')
  
});

request.open('GET', url)
request.send();