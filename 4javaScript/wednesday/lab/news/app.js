let newsPaper = document.getElementById("news");
let allNews = document.getElementById("allNews");
function yup() {
  console.log('I ran!')
  let x = 'hello'
  console.log(x)
  let v='jey'
  console.log(v)
  console.log("he said")
}


let displayed = news.articles.map(element => {
  let paper = `<li>
              <h4>${element.author}</h4>
              <h2>${element.title}</h2>
              <p>${element.description}</p>
              <a href='${element.url}'>Read More</a>
              <img src="${element.urlToImage}" alt="news image">
              <p>Published at: ${element.publishedAt}</p>
  </li>`
  
  newsPaper.innerHTML += paper;
})

let displaying = sources.sources.map(element => {
  // function yup() {
  //   let x = 'hello'
  //   console.log(x)
  //   let v='jey'
  //   console.log(v)
  // }
  let stuff = yup
  let listOfNews = `<a onclick="yup()" href="#" >${element.id}</a>`
  
  allNews.innerHTML += listOfNews;
  
})

