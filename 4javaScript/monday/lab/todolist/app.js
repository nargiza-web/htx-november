let addTask = document.getElementById("addTask")
let textBox= document.getElementById("textBox")
let ulPending = document.getElementById("pending")
let ulCompleted = document.getElementById("completed")

addTask.addEventListener('click', function(){
  let checkbox = document.createElement('input')
  checkbox.type = "checkbox"
  checkbox.className="checkbox"
  let label = document.createElement('label')
  let taskName = textBox.value
  let liPending = document.createElement('li')
  let liCompleted = document.createElement('li')
  let remove = document.createElement('button')
  remove.innerHTML = "Remove"
  label.innerHTML = taskName
  
  liPending.appendChild(checkbox)
  liPending.appendChild(label)
  liPending.appendChild(remove)
  ulPending.appendChild(liPending)
  
  checkbox.addEventListener('click', function(){
     if(checkbox.checked === true){
      liCompleted.appendChild(checkbox)
      liCompleted.appendChild(label)
      liCompleted.appendChild(remove)
      ulCompleted.appendChild(liCompleted)
     }
     else {
      liPending.appendChild(checkbox)
      liPending.appendChild(label)
      liPending.appendChild(remove)
      ulPending.appendChild(liPending)
     }
  })
  

  remove.addEventListener('click', function(){
    liPending.parentNode.removeChild(liPending);
    liCompleted.parentNode.removeChild(liCompleted);
  }, false)
  
})