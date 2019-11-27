
// call the getRandomAd function
let ad = getRandomAd();
console.log(ad)
// get the adImage by id
 let randomImage = document.getElementById("adImage")
// set the src property to the new random ad image  
randomImage.src = ad;