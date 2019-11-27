let taskNameTextBox = document.getElementById("taskNameTextBox")
let addButton = document.getElementById("addButton")
let taskList = document.getElementById('taskList')
addButton.addEventListener("click", function(){

    let taskName = taskNameTextBox.value 
    
    // label 
    let taskNameLabel = document.createElement('label')
    taskNameLabel.innerHTML = taskName

    // checkbox 
    let checkbox = document.createElement("input")
    checkbox.type = 'checkbox'

    // button 
    let removeButton = document.createElement("button")
    removeButton.innerHTML = 'Remove'

    removeButton.addEventListener('click',() => {
        
    })

   // removeButton.addEventListener('click',function() {
   //     console.log('remove button')
   // })

    // li
    let li = document.createElement('li')

    li.appendChild(checkbox)
    li.appendChild(taskNameLabel)
    li.appendChild(removeButton)

    taskList.appendChild(li)
})

