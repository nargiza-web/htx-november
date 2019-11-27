let header = document.createElement("header")
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let div6 = document.createElement('div')
let div7 = document.createElement('div')
let div8 = document.createElement('div')
let div9 = document.createElement('div')
let div10= document.createElement('div')
let div11= document.createElement('div')
div11.className = "catImages"

div1.innerHTML = "Funny"
div1.setAttribute("id", "div1")
div2.innerHTML = "DIY"
div2.setAttribute("id", "div2")
div3.innerHTML = "Tattoo"
div3.setAttribute("id", "div3")
div4.innerHTML = "Drawing"
div4.setAttribute("id", "div4")
div5.innerHTML = "Illustration"
div5.setAttribute("id", "div5")
div6.innerHTML = "Art"
div6.setAttribute("id", 'div6')
div7.innerHTML = "Cute"
div7.setAttribute("id", "div7")
div8.innerHTML = "Breeds"
div8.setAttribute("id", "div8")
div9.innerHTML = "Stuff"
div9.setAttribute("id", "div9")
div10.innerHTML = "Photography"
div10.setAttribute("id", "div10")

let images = `
    <img  src="https://cdn.shopify.com/s/files/1/3004/1474/products/orange-tabby_1800x1800.png?v=1544042837">
    <img  src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg">
    <img  src="https://www.c-ville.com/wp-content/uploads/2019/09/Cats-660x335.jpg">
    <img src="https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR">
    <img src='https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvsVXldS-MdvGWFqiud5GiegA-lab9dW1hH2DpT6v82v96pO6&s'>
    <img src='https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73YGBsO0vJLLCLt7H_xT_K4weDAEaTFJWTcvvHh-gwMgcXWL0&s'>    
`

div11.innerHTML = images

header.appendChild(div1)
header.appendChild(div2)
header.appendChild(div3)
header.appendChild(div4)
header.appendChild(div5)
header.appendChild(div6)
header.appendChild(div7)
header.appendChild(div8)
header.appendChild(div9)
header.appendChild(div10)
document.body.appendChild(header)

document.body.appendChild(div11)


