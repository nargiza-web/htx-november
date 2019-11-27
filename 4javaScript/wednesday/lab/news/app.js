let newsPaper = document.getElementById("news");
let allNews = document.getElementById("allNews");

console.log(news.articles);

news.articles.map(element => {
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



sources.sources.map(element => {
  let listOfNews = `<a href="#">${element.id}</a>`
  allNews.innerHTML += listOfNews;
})