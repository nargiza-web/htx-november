//const url = http://www.omdbapi.com/?i=tt3896198&apikey=9facd5ec
let postUL = document.getElementById("postUL")
let idStuff = document.getElementById("idDetails")
const url = "http://www.omdbapi.com/?s=batman&apikey=9facd5ec";

function getAPI(completion){
  let request = new XMLHttpRequest();
  request.onload = function(){
    let apis = JSON.parse(this.responseText)
    completion(apis)
  }
  
  request.open('GET', url);
  request.send()
}

getAPI((apis)=>{
  console.log(apis);
  updateUI(apis);
});

function updateUI(apis){
  let apisInfo = apis.Search.map((item) => {
    return `<li>
                <img class="thumbnails" src="${item.Poster}"/>
                <label><a class="thumbText" href="#" onclick="displayIdDetails('${item.imdbID}')">${item.Title}</a></label>
    
            </li>`
  })
  postUL.innerHTML = apisInfo.join(' ');
}

function displayIdDetails(details){
  //postUL.innerHTML = " ";
  let idRequest =`http://www.omdbapi.com/?i=${details}&apikey=9facd5ec`
  console.log(idRequest);
  
  let newRequest = new XMLHttpRequest();
  newRequest.open('GET', idRequest);
  newRequest.send();
  newRequest.onload = function(){
    if( newRequest.status !=200){
      alert(newRequest.status + ':' + newRequest.statusText)
    }
    else {
      let parsedId = JSON.parse(newRequest.responseText);
      idDetails(parsedId);
    }
  }
}

function idDetails(movieid){
  let moviedetails = `
                    <div class="container">
                      <div class="right">
                        <h1>${movieid.Title}</h1>
                        <img src="${movieid.Poster}">
                      </div>
                      <div class="left">
                        <h3>Year: ${movieid.Year}</h3>
                        <h3>Rated: ${movieid.Rated}</h3>
                        <h3>Released: ${movieid.Released}</h3>
                        <h3>Director: ${movieid.Director}</h3>
                      </div>
                    </div>
  `
  idStuff.innerHTML = moviedetails;
}


