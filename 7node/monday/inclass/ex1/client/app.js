const url = "http://localhost:3000/movies"

fetch(url).then(response => response.json())
          .then(json => console.log(json))