

function getRandomAd() {

    let ads = ["1.png","2.png","3.png","4.png","5.png"]
    let randomNo = Math.floor((Math.random() * ads.length - 1) + 1)
    return ads[randomNo]

}
