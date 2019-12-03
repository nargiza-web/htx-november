
const url = "https://jsonplaceholder.typicode.com/users"
const postURL = 'https://jsonplaceholder.typicode.com/posts'

const usersUL = document.querySelector("#usersUL")
const savePostButton = document.querySelector("#savePostButton")

savePostButton.addEventListener('click',() => {
    // perform a post request 
    let request = new XMLHttpRequest() 
    request.open('POST',postURL)
    request.setRequestHeader("Content-Type", "application/json");

    let body = { title: "john doe",body: "hello world",userId: 1}

    //const bodyAsString = JSON.stringify(body)
    //console.log(bodyAsString)

    request.send(JSON.stringify(body))

})



/*


// create a XMLHttpRequest 
let request = new XMLHttpRequest()

request.open("GET", url)

/*
request.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
        // we are done
        console.log(this.responseText)
    }

    console.log(this)
} */

// hook up the load event 

/*
request.onload = function() {
    let users = JSON.parse(this.responseText)
    console.log(users)

    let userItems = users.map(user => {
        return `<li>${user.name}</li>
                <li> ${user.address.street}</li>
                <li>${user.address.geo.lat}</li>`
    })

    usersUL.innerHTML = userItems.join('')

} 

// send the request 
request.send() */
