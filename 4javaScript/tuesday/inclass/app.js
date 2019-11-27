let taskNameTextBox = document.getElementById("taskNameTextBox");
let addButton = document.getElementById("addButton");
let taskList=documnet.getElementById("taskList");

addButton.addEventListener("click", function(){
  
  let taskName = taskNameTextBox.value
  let taskNameLabel=document.createElement('label')
  taskNameLabel.innerHTML = taskName;
  console.log(taskName)
  let li=document.createElement('li')
  li.innerHTML = taskName
  taskList.appendChild(li);
})