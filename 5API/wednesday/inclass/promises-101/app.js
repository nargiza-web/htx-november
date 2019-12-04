
// async and await for promises 
async function getAllTodos() {

    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    let todos = await response.json()
    console.log(todos)

}

getAllTodos() 



// todos and filter the completed todo items 
/*
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(todos => {
    let completedItems = filterCompletedItems(todos)
    //displayItems(completedItems)
    
    //console.log(todos)
    //let completedItems = todos.filter((todoItem) => todoItem.completed)
    //console.log(completedItems)
})

function filterCompletedItems(todos) {
    console.log(todos)
    let completedItems = todos.filter((todoItem) => todoItem.completed)
    return completedItems
    console.log(completedItems)
} */


// fetch library to perform network requests 
// fetch is Promise based library 
// by default GET request 

/*
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    //console.log("hello")
    return response.json()
})
.then(json => console.log(json))
*/




/*
let promise = new Promise(function(resolve,reject){
    
    let request = new XMLHttpRequest() 
    request.open("GET","https://jsonplaceholder.typicode.com/posts")

    request.onload = function() {
        let posts = JSON.parse(this.responseText)
        resolve(posts)
    }

    request.send() 
}) */

//promise.then(posts => console.log(posts))

/*
promise.then((result) => {
    console.log(result) 
    return result 
})
.then((result) => result + "hello")
.then((result) => {
    result += "add fries"
    return result
}).then((result) => {
    console.log(result)
})
.catch(error => {
    console.log("error fired promised is not resolved")
})
.then(function(){
    console.log("then after catch!")
})

*/


//let url = "http://api.openweathermap.org/data/2.5/weather?q=houston,uk&appid=7d2dd8c9c5578b741c7735ad3f0d39ea&units=imperial"

