class Car {
	
  constructor(make, model) {
  		this.make = make
      this.model = model
  }
  
  drive() {
  	this.accelerate() 
  	console.log("drive")
  }
  
  accelerate() {
  	console.log("accelerating..")
  }

}

let car = new Car('Honda','Accord') 

car.drive()
//car.make = "Honda"
//car.model = "Accord"
car.vin = "33322DDFFASS"

let car2 = {make: "Tesla", model: "Model 3"}
car2.vin = "333333"

// car2["make"] // Tesla

console.log(car2)


console.log(car)