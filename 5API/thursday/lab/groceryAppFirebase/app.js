let addButton = document.getElementById("addBtn")
let titleCategory = document.getElementById("groceryStore")
let groceryAddress = document.getElementById("groceryAddress")
let groceryItem = document.getElementById("groceryItem")
// categoryBtn is to add your store 
let categoryBtn = document.getElementById("categoryBtn")
let groceryItems = document.getElementById("groceryItems")
let listItems = document.getElementById("listItems")
let storeList = document.getElementById("storeList")
let allstores = document.getElementById("allstores")
let addItemOnYourList = document.getElementById("addItemOnYourList")
//Get a reference to the database service
let database = firebase.database();
let root = database.ref();

//create a ShoppingLists under child
let shoppingListsRef = root.child('ShoppingLists')

function displayStores(stores){
  let storeTitles = stores.map(store => {
    return `<li>${store.title}</li>
            <button id="addItemOnYourList">add your list</button>
    `
  })
  
  allstores.innerHTML = storeTitles.join('')
}

function setupObservers(){
  shoppingListsRef.on('child_added', snapshot => {
    let allData = {key: snapshot.key, ...snapshot.val()}
    console.log(allData)
    console.log(allData.title)
  })
}

// categoryBtn.addEventListener("click", () => {
  
  shoppingListsRef.on('value', (snapshot) => {
    let groceryMarket= []
    let snapshotValue = snapshot.val()
    
    for (let key in snapshotValue) {
      console.log(key)
      let grocery = snapshotValue[key]
      console.log(grocery.title)
      groceryMarket.push(grocery)
    }
    console.log(groceryMarket)
    displayStores(groceryMarket)
  })
  
  categoryBtn.addEventListener("click", () => {
    let title = titleCategory.value 
    let address = groceryAddress.value
    
    //now save those in data base with a unique id
    shoppingListsRef.push({
      title: title,
      address: address
    })
  })
  
  // addItemOnYourList.addEventListener("click", ()=>{
  //   let display = `<h3></h3>`
  // })
  
  setupObservers()
  // console.log(shoppingListsRef.title)
  
  
  
  // let title = titleCategory.value
  // let address = groceryAddress.value
  // let items = []
  
  // shoppingListsRef.push({
  //   title: title,
  //   address: address,
  //   items: items
  // })
  
  // let display = `<div class="storeTitle">Store name: ${title}</div>
  //            <div>Store address: ${address}</div>
  //            <input type="text" placeholder="milk, eggs..">
  //            <button onclick=displayItems()>add item</button>
  //            <li id="listItems"></li>
  // `
  // groceryItems.innerHTML = display
// })


// addButton.addEventListener("click", ()=> {
//   let item = groceryItem.value
  
//   //save the post and create a unique ID for the NODE
//   shoppingListsRef.push({
//     title: title,
//     address: address,
//     item: item
//   })
  
//   console.log(shoppingListsRef);
// })

// shoppingListsRef.on('value', (snapshot) => {
//   let items = []
// })
