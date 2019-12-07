
// Get a reference to the database service
let database = firebase.database();
let shoppingListsRef = database.ref("shoppinglists")


let shoppingListNameTextBox = document.getElementById("shoppingListNameTextBox")
let saveShoppingListButton = document.getElementById("saveShoppingListButton")
let shoppingListUL = document.getElementById("shoppingListUL")


function setupObservers() {

    shoppingListsRef.on('value',(snapshot) => {

        let shoppingLists = [] 

        let snapshotValue = snapshot.val() 

        for(let key in snapshotValue) {
            let shoppingList = snapshotValue[key] 
            shoppingList.shoppingListId = key
            shoppingLists.push(shoppingList)
        }

        updateUI(shoppingLists) 

    })

}

function deleteShoppingList(shoppingListId) {

    shoppingListsRef.child(shoppingListId).remove()

    // event.target.previousElementSibling.previousElementSibling will be the hidden element 

    console.log(shoppingListId)
}

function updateUI(shoppingLists) {

    let shoppingListItems = shoppingLists.map((shoppingList) => {
        return `<li>
            <input type='hidden' value='${shoppingList.shoppingListId}'></input>
            <label>${shoppingList.title}</label>
            <button onclick='deleteShoppingList("${shoppingList.shoppingListId}")'>Remove</button>
        </li>`
    })

    shoppingListUL.innerHTML = shoppingListItems.join('')

}


saveShoppingListButton.addEventListener('click',() => {

    let shoppingListName = shoppingListNameTextBox.value
    shoppingListsRef.push({
       title: shoppingListName
    })
})

/*
   root 
     - shoppinglists 
               - 848484884
                    - title 
*/


setupObservers() 




