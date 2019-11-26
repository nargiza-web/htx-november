let darkMode = document.getElementById("darkMode")
let lightMode=document.getElementById("lightMode")

darkMode.addEventListener('click', function(){
  console.log("button is clicked!")
  document.body.style.backgroundColor = 'black'
})

lightMode.addEventListener('click', function(){
  document.body.style.backgroundColor="white"
})