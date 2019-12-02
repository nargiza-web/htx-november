

let todoTitleTextBox = document.getElementById("todoTitleTextBox")
let btnSave = document.getElementById("btnSave")
let tasksList = document.getElementById("tasksList")

function updateUI(tasks) {

  tasksList.innerHTML = ''

  tasks.forEach(function(task){
    let liItem = `<li>${task.title}</li>`
    tasksList.innerHTML += liItem
  })


}

function setupObservers() {

  // value, child_added, child_removed (check it)
  database.ref("todo-items").on("value",function(snapshot){

    let tasks = []

    for(let key in snapshot.val()) {

      // plug in the key and get the object out of the dictionary
      let task = snapshot.val()[key]
      tasks.push(task)

    }

    updateUI(tasks)

  })

}

btnSave.addEventListener('click',function(){
  saveTodoItem()
})

function saveTodoItem() {

  let title = todoTitleTextBox.value

  let todoItemsRef = database.ref("todo-items")

  todoItemsRef.push({
    title : title,
    priority : "high"
  })


  /*
  todoItemsRef.child(title).set({
    title : title,
    priority : "high"
  }) */

}

setupObservers()
