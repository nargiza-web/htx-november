let addTask = document.getElementById("addTask");
// let taskValue = addTask.value
let btnAdd = document.getElementById("btnAdd");
let ulPending = document.getElementById("ulPending");
let ulCompleted = document.getElementById("ulCompleted")

function removeItem(obj){
  let li=obj.parentElement //referencing to the value typed
  if(ulPending.contains(li)) {
    ulPending.removeChild(li)
  } else {
    ulCompleted.removeChild(li)
  }
  // ulPending.removeChild(li)
  // ulCompleted.removeChild(li)
}

function checkedItem(obj){
  
  if(obj.checked === true){
    let liCompleted = obj.parentElement;
    console.log(liCompleted);
    ulCompleted.appendChild(liCompleted);
  } else {
    let liPending = obj.parentElement;
    console.log(liPending);
    ulPending.appendChild(liPending);
  }
}

btnAdd.addEventListener("click", function(){
  let taskValue = addTask.value
  console.log(taskValue);
  
  let liItem = `<li class="allItems">
                <input onClick="checkedItem(this)" type="checkbox" class="box"/>
                <label>${taskValue}</label>
                <button class="btnRemove" onClick="removeItem(this)">Remove</button>
                </li>`
  ulPending.insertAdjacentHTML('beforeend', liItem);
  
})
