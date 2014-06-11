function Dog(age, color, breed) {

  this.age = age;
  this.color = color;
  this.breed = breed;
  this.bark = function () {return 'bark!'}
  }

  Dog.prototype.toString = function () {
    return "The " + this.breed + " is " + this.color + " and is " + this.age + " years old."
  }


var firstdog = new Dog(5, "yellow", "golden retriever")
var seconddog = new Dog(1, "black", "lab")

console.log(firstdog.toString())
console.log(seconddog.toString())
console.log(firstdog.bark())
