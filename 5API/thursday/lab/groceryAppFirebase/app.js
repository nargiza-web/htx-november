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
let itemValue = document.getElementById("itemValue")
//Get a reference to the database service
let database = firebase.database();
let root = database.ref();
let itemsRef = root.child("items")

//create a ShoppingLists under child
let shoppingListsRef = root.child('ShoppingLists')

function displayStores(stores){
  let storeTitles = stores.map(store => {
    return `<li class="title">${store.title}</li>
            <label>add your item:</label>
            <input id="itemValue" type="text">
            <input type="hidden"> 
            <button id="addItemOnYourList">add your list</button>
            <button id="remove" onclick='deleteStore("${store.storeID}")'>remove this store</button>
    `
  })
  
  allstores.innerHTML = storeTitles.join('')
}

function displayItems(items){
  let addedItems = items.map(item => {
    return `
            <li>${item.item}</li>
    `
  })
  groceryItems.innerHTML += addedItems
}

function deleteStore(thisStoreID){
  shoppingListsRef.child(thisStoreID).remove()
  console.log(shoppingListId)
}



//event.target.previousElementSibling.previousElementSibling to go to the most upper sibling

function setupObservers(){
  shoppingListsRef.on('child_added', snapshot => {
    let allData = {key: snapshot.key, ...snapshot.val()}
    console.log(allData)
    console.log(allData.title)
  })
  
  itemsRef.on('child_added', snapshot => {
    let allData = {key: snapshot.key, ...snapshot.val() }
  })
}

// categoryBtn.addEventListener("click", () => {
  
  shoppingListsRef.on('value', (snapshot) => {
    let groceryMarket= []
  
    let snapshotValue = snapshot.val()
    
    
    for (let key in snapshotValue) {
      //console.log(key)
      let grocery = snapshotValue[key]
      grocery.storeID = key
      
      //console.log(grocery.title)
      groceryMarket.push(grocery)
    
    }
    //console.log(groceryMarket)
    displayStores(groceryMarket)
  
  })
  
  itemsRef.on('value', (snapshot) => {
    let items = []
    let snapshotValue = snapshot.val()
    
    for(let key in snapshotValue){
      let itemStuff = snapshotValue[key]
      items.push(itemStuff)
    }
    
    displayItems(items)
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
  
  addItemOnYourList.addEventListener("click", () => {
    let item = itemValue.value
    let itemRef = itemsRef.push()
    //now you need to save this value in database
   itemRef.set({
    item: item
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
