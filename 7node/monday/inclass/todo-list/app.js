let taskNameTextBox = document.getElementById("taskNameTextBox")
let addButton = document.getElementById("addButton")
let taskList = document.getElementById('taskList')


function removeItem(obj) {
    let li = obj.parentElement // li to be removed 
    taskList.removeChild(li)
}

addButton.addEventListener("click", function(){

    let taskName = taskNameTextBox.value 

    // template literal to create the li element 
    let liItem = `<li id='hello1'>
                    <input type='checkbox' />
                    <label>${taskName}</label>
                    <button onClick='removeItem(this)'>Remove</button>
                  </li>
                    `

    // append liItem before the end of the ul list 
    taskList.insertAdjacentHTML('beforeend',liItem)

    //taskList.innerHTML += liItem
})
