let container=document.getElementById("container")
let header = document.createElement('header')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')

let div4 = document.createElement('div')
let div4a = document.createElement('div')
let div4b = document.createElement('div')
let div4c = document.createElement('div')

let h1 = document.createElement('h1')
let p1 = document.createElement('p')

let h2 = document.createElement('h2')
let p2 = document.createElement('p2')
let div4b1 = document.createElement('div')

let div4b1a = document.createElement('div')
let div4b1b = document.createElement('div')

let h3 = document.createElement('h2')
let p3 = document.createElement('p')
let div4c1= document.createElement('div')

let div4c1a = document.createElement('div')
let div4c1b = document.createElement('div')

div1.innerHTML = "HighOnCoding"
div2.innerHTML="Home"
div3.innerHTML="Categories"
h1.innerHTML = "Curse of the Current Reviews"
p1.innerHTML = "When you want to buy an application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. The choice is dependent on three important factors price and reviews. "
h2.innerHTML = "Hello WatchKit"
p2.innerHTML = "Last month Apple released the anticode WatchKit Frame Work for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and devoloping apps for the Apple Watch."

div4b1a.innerHTML = "12 comments"
div4b1b.innerHTML = "124 likes"

h3.innerHTML = " Introduction to Swift"
p3.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
div4c1a.innerHTML = "15 comments"
div4c1b.innerHTML = "45 likes"


div4.className="wrapper"
div4c1.className = "flex"
div4b1.className = "flex"
div4a.className = "div4a"
div4c1a.className = "divmargin"
div4b1a.className = "divmargin"

header.appendChild(div1)
header.appendChild(div2)
header.appendChild(div3)
container.appendChild(header)

div4a.appendChild(h1)
div4a.appendChild(p1)

div4b.appendChild(h2)
div4b.appendChild(p2)
div4b1.appendChild(div4b1a)
div4b1.appendChild(div4b1b)
div4b.appendChild(div4b1)

div4c.appendChild(h3)
div4c.appendChild(p3)
div4c1.appendChild(div4c1a)
div4c1.appendChild(div4c1b)
div4c.appendChild(div4c1)


div4.appendChild(div4a)
div4.appendChild(div4b)
div4.appendChild(div4c)
container.appendChild(div4)