let dishesPage = document.getElementById("dishesPage");
let textBox = document.getElementById("textBox");
let startersBtn = document.getElementById("Starters-btn");
let entreesBtn = document.getElementById("Entrees-btn");
let dessertsBtn = document.getElementById("Desserts-btn");

dishes.map(dish => {
  let page = `<li class=wrapper>
              <img src=${dish.imageURL}>
              <div class="col2">
                <h4>${dish.title}</h4>
                <div>${dish.description}</div>
              </div>
              <div>${dish.price}</div>
              </li>`
  return dishesPage.innerHTML += page
})

startersBtn.addEventListener("click", ()=>{
  dishesPage.innerHTML = " "
  let starters= dishes.filter( dish => dish.course === "Starters")
    console.log(starters);
    
    starters.map(dish => {
      let page = `<li>
              <h2>${dish.title}</h2>
              <div>${dish.description}</div>
              <div>${dish.price}</div>
              <img src=${dish.imageURL}>
              </li>`
  return dishesPage.innerHTML += page
    })  
  })
  
entreesBtn.addEventListener("click", ()=>{
  dishesPage.innerHTML = " "

  let entrees= dishes.filter( dish => dish.course === "Entrees")
  console.log(entrees);
  
  entrees.map(dish => {
    let page = `<li>
            <h2>${dish.title}</h2>
            <div>${dish.description}</div>
            <div>${dish.price}</div>
            <img src=${dish.imageURL}>
            </li>`
return dishesPage.innerHTML += page
  })  
})

dessertsBtn.addEventListener("click", ()=>{
  dishesPage.innerHTML = " "

let desserts= dishes.filter( dish => dish.course === "Desserts")
console.log(desserts);

desserts.map(dish => {
  let page = `<li>
          <h2>${dish.title}</h2>
          <div>${dish.description}</div>
          <div>${dish.price}</div>
          <img src=${dish.imageURL}>
          </li>`
return dishesPage.innerHTML += page
})  
})

