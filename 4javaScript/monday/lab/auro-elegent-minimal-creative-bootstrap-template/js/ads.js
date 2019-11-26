var ads = {
    "Modern":{
      imageUrl :"https://d2x6fvmwptmao1.cloudfront.net/cdn/farfuture/FInRBckgP1tWCAjioFc1mgppZIKBRFq1kG3hqfx5BLg/mtime:1434090405/sites/default/files/ROO.2008.20.jpg",
      text: "Modern Art",
      link: "https://www.heide.com.au/collection"
    },
    "Contemporary":{
      imageUrl :"http://www.sothebys.com/content/dam/sothebys-pages/home-page-slides/2017/3/ctp-ink-blog-3.22.jpg.webrend.1920.350.jpeg",
      text:"Contemporary",
      link: "http://www.sothebys.com/en/news-video/blogs/all-blogs/eye-on-asia/2017/03/a-milestone-for-Contemporary-Art-in-China.html"
    },
    "Abstract":{
      imageUrl: "http://www.cianellistudios.com/images/abstract-art/abstract-art-mother-earth.jpg",
      text:"Abstract Art",
      link:"http://www.cianellistudios.com/abstract_art_mother_earth.html"
    }

}

function getAdFor(adType) {
  return ads[adType]
}
