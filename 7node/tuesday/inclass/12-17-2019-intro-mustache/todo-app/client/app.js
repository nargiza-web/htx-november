
let todosUL = document.getElementById("todosUL") 

fetch('http://localhost:3000/todos')
.then(response => response.json())
.then(todos => {
 
    let todoItems = todos.map((todo) => {
        return `<li>${todo.title}</li>`
    })

    todosUL.innerHTML = todoItems.join('')

})

