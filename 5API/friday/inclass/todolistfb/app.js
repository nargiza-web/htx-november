
let btnAddTask = document.getElementById("btnAddTask")
let tasksList = document.getElementById("tasksList")

// get access to the database root node
let rootRef = firebase.database().ref()
// create a parent for new task nodes
let tasksRef = rootRef.child("tasks")

btnAddTask.addEventListener('click',function(){

    let title = document.getElementById("titleTextBox").value
    // add a task to the tasks node
    //let taskRef = tasksRef.child(title)
    // get a child node with unique id
    let taskRef = tasksRef.push()
    // ios and android
    //let tasfRef = taskRef.childAutoId()

    taskRef.set({
      title : title,
      priority : "high",
      createdDate : "12/15/2017"
    })

    console.log(taskRef)

})

// create a subcription to the tasks node
// tasksRef points to the "tasks" node in firebase
tasksRef.on('value',function(snapshot){

  //console.log(snapshot.val())
    tasksList.innerHTML = ""

    for(key in snapshot.val()) {
      //console.log(key)
      let task = snapshot.val()[key]
      task.key = key
      console.log(task.title)
      //console.log(task)

      let taskItem = document.createElement("li")
      taskItem.setAttribute("key",key)
      taskItem.innerHTML = task.title
      taskItem.addEventListener('click',function(){

        let key = this.getAttribute("key")
        tasksRef.child(key).remove()

        console.log(key)
      })

      tasksList.appendChild(taskItem)

    }

})
