const url = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";
const allCoffee = document.querySelector(".get-all-orders");
const addCoffee = document.querySelector(".addCoffee");
let email = document.getElementById("email")
let cofName = document.getElementById("cofName")
const searchCoffee = document.getElementById("searchCoffee");
const typeEmail = document.getElementById("typeEmail");
const yourCoffee = document.querySelector(".yourCoffee")

function displayNames(obj){
  allCoffee.innerHTML = "" 
  console.log(obj)
  for (let property in obj){
    console.log(property)
    let info = obj[property]
    let displayCoffee = `<li>${info.coffee}</li>`
    allCoffee.innerHTML += displayCoffee;
  }
}

function getAllOrders() {
  let request = new XMLHttpRequest();
request.onload = function(){
  let data = JSON.parse(this.responseText);
  //console.log(data)
  displayNames(data)
}
request.open('GET', url);
request.send();
}

addCoffee.addEventListener('click', () => {
let addRequest = new XMLHttpRequest();
addRequest.open('POST', url);
addRequest.setRequestHeader("Content-Type", "application/json");
addRequest.onload = function() {
  getAllOrders()
}
let emailValue = email.value;
console.log(emailValue);
let coffeeValue = cofName.value;
console.log(coffeeValue);
let coffeeString = {emailAddress:emailValue, coffee:coffeeValue};
console.log(coffeeString);
displayNames(coffeeString);
addRequest.send(JSON.stringify(coffeeString));
})

getAllOrders() 

searchCoffee.addEventListener('click', () => {
  let typeEmailValue = typeEmail.value;
  //console.log(typeEmailValue);
  
  let request = new XMLHttpRequest();
request.onload = function(){
  let data = JSON.parse(this.responseText);
  for(let property in data){
    // let whatever = data[property]
    //console.log(whatever);
    // for(let i=0; i<data[property].length; i++){
    //   if( data[property].emailAddress == typeEmailValue){
    //     console.log("hello");
    //   }
    // }
    
    if(data[property].emailAddress == typeEmailValue){
      console.log(data[property].coffee)
    }
    else{
      console.log("not yet")
    }
  }
}

request.open('GET', url);
request.send();
})


