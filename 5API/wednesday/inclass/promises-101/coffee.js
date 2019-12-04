
let emailTextBox = document.getElementById("emailTextBox")
let searchButton = document.getElementById("searchButton") 

searchButton.addEventListener('click',() => {
    let email = emailTextBox.value 
    searchOrder(email)
})

function searchOrder(email)  {
    let searchURL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${email}`

    let request = new XMLHttpRequest()
    request.open("GET",searchURL)

    request.onload = function() {
        console.log(this.responseText)
    }

    request.send() 
}

const url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let orders = [] 

let request = new XMLHttpRequest()
request.open("GET",url)

request.onload = function() {
    
    let result = JSON.parse(this.responseText)
    for(let property in result) {
        let order = result[property] 
        orders.push(order)
    }

    displayOrders(orders)
}

function displayOrders(orders) {
    let orderItems =  orders.map(order => {
        return `<li>${order.coffee}</li>`
    })

    // assign it to the innerHTML of some element to display on screen.
}

request.send()


