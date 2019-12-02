
let postsUL = document.getElementById("postsUL")
const url = "https://jsonplaceholder.typicode.com/photos"


function getPhotos(completion) {

    let request = new XMLHttpRequest() 
    request.onload = function() {
        let photos = JSON.parse(this.responseText)
        completion(photos,"hello world")
    }

    request.open('GET',url)
    request.send() 

    // the following line is executed before the async finishes
    //return photos
}

getPhotos((photos,message) => {
    console.log(message)
    console.log(photos)
    updateUI(photos)
})

function updateUI(photos) {

    let photoItems = photos.map((photo) => {
        return `<li>    
                    <label>${photo.title}</label>
                    <img src='${photo.thumbnailUrl}' />
                </li>`
    })

    postsUL.innerHTML = photoItems.join(' ')

}




