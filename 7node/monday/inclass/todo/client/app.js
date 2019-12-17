
const url = "http://localhost:3000/movies"

// get all the movies and display on the console 
fetch(url).then(response => response.json())
.then(json => console.log(json))



