const postUrl = "https://hungry-diagram.glitch.me/movies";

const saveMovie = document.querySelector(".post-movie");
saveMovie.addEventListener('click',()=> {
  let request = new XMLHttpRequest()
  request.open('POST', postUrl)
  request.setRequestHeader("Content-Type", "application/jsn");
  
  let body={title: "3 idiots", rating: "10" }
  
  request.send(JSON.stringify(body))
})

const getMovies = document.querySelector(".allmovies")
let request = new XMLHttpRequest()

request.onload = function(){
  let posts = JSON.parse(this.responseText)
  
  let postMovies = posts.map(movie => {
    return `<li>${movie.title}</li>`
    
  });
  getMovies.innerHTML = postMovies.join(' ');
}

request.open('GET', postUrl)
request.send();
