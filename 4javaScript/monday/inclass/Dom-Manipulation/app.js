
// get the button using the id
let addTaskButton =  document.getElementById("addTaskButton")
// get access to the textbox 
let taskNameTextBox = document.getElementById("taskNameTextBox")
// get access to ul 
let taskListUL = document.getElementById("taskListUL")


// attach onclick event to the button 
addTaskButton.addEventListener('click', function() {
    console.log("button is clicked")
    //document.body.style.backgroundColor = 'red'
    // print the value user typed in the textbox 
    //console.log(taskNameTextBox.value) 
    let taskName = taskNameTextBox.value

    // create the LI element 
    let liItem = document.createElement("li") 
    // set the inner html of liItem 
    liItem.innerHTML = taskName

    let btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remove"
    liItem.appendChild(btnRemove)

    console.log(liItem)

    taskListUL.appendChild(liItem)

    // adding the same liItem to document will remove it from the UL
    //document.body.appendChild(liItem)

}) 

/*
function addTaskButtonPressed() {
    console.log("button is clicked!")
} */



