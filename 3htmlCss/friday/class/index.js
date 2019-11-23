
let name = "John" // use this one 
var name2 = "Mary"
const pi = 3.142 // assigned only once 

function greet(full_name,age) {
  console.log("Hello! " + full_name + "and age is " + age)
}

function add(a,b) {
  return a+b 
  console.log("This does not matter!")
}

greet("John Doe",23) // calling greet function 

console.log(add(4,5)) 


let result = add(3,4)
console.log(result)

// array/list names should be plural. It is a good practice 
let numbers = [3,4,5,6,12]

numbers[0]
numbers[1]
numbers[2]

console.log("Printing the contents of the numbers array")
// for loop 
// for (start index; condition for ending; how to increment)
for(let index = 0; index < numbers.length; index++) {
  console.log(index)
  console.log(numbers[index])
}

// while 
let count = 0 
while(count < 10) {
  count++
  // break keyword is used to break/end the loop 
}

// conditions 
let age = 30 

if(age > 20) {
  console.log("age is greater than 20")
} else {
  console.log("age is less than 20")
}

// else if 

if(age > 20) {

} else if(age < 10) {

} else {

}


// && means and 
if(age > 20 && name == "john") {

}

// || is or operator 
if(age > 20 || name == "john") {

}

// classes and objects 

// In JS there are no classes. behind the scene they are just functions
function Car() {
  this.make = "Honda"
  this.model = "Accord"
  this.speed = 0.0
  
  function updateCarFirmware() {
    
  }

}

Car.prototype.updateState = function(oil, tire) {

}

Car.prototype.changeGear = function(gear) {
  console.log("changing gear to " + gear)
}

Car.prototype.drive = function() {
  this.speed += 40
  console.log("car is driving")
}

let c5 = new Car() 

// anonymous object with name and update properties
//let car = {name: "Alex", update: function() {}}

c5.drive() 
c5.changeGear(3) 
c5.updateState("Oil Type","Good Tire")

/*
function driveCar() {
  this.speed += 40
  console.log("car is driving")
}

function brakeCar() {
  console.log("brake car")
} */

//Car.prototype.brake = brakeCar
//Car.prototype.drive = driveCar 


// creating object of Car class 

let car4 = new Car() 


let car = new Car(); 
console.log(car)
car.drive()

let car1 = new Object() 
car1.make = "Toyota"
car1.model = "Camry"

car1.drive = function() {
  console.log("car driving")
}
car1.brake = function() {
  console.log("car brake")
}

car1.drive() 
car1.brake() 


let car2 = new Object() 
console.log(car2.model)

 // creating js empty object 
let car3 = {} // creating js empty object

console.log(car2)


function BankAccount(balance, type) {
  this.balance = balance
  this.type = type 
}

BankAccount.prototype.deposit = function(balance) {
  this.balance += balance
}

BankAccount.prototype.withdraw = function(withdraw) {
  this.balance -= withdraw
}

let bankAccount = new BankAccount(10,"checking") 
bankAccount.deposit(100)

console.log(bankAccount)

let anotherBankAccount = new BankAccount(20,"saving") 
anotherBankAccount.deposit(100)

console.log(anotherBankAccount)

anotherBankAccount.withdraw(50)

console.log(anotherBankAccount)
