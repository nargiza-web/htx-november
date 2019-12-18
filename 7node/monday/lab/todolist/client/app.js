const taskNameTextBox = document.getElementById("taskNameTextBox")
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")
const url = "http://localhost:3571/"

function removeItem(obj) {
  let li = obj.parentElement
  taskList.removeChild(li)
}

addButton.addEventListener("click", () => {
  let taskName = taskNameTextBox.value;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify({
      "taskName": "taskName" 
    })
  })
  
  
  let liItem = `<li id='eachLi'>
                <input type = 'checkbox' />
                <label> ${taskName}</label>
                <button onClick = 'removeItem(this)'>Remove</button>
                </li>`
                
// append item before the end of the ul list
taskList.innerHTML += liItem;
//taskList.insertAdjacentHTML('beforeend', liItem)
})
