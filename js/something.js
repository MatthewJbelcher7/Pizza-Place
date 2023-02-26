 // Business Logic

function Pizza(pizzaGuest, pizzaToppings, pizzaSize) {
  this.guest = pizzaGuest;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;

  this.calcCost = function() {
  let cost = 0

  switch (this.size) {
    case "small":
      cost += 12;
      break;
    case "medium":
      cost += 16;
      break;
    case "large":
      cost += 18;
      break;
    default:
      break;
  }
  }
} 

let pizzaSize = {size: ["small", "medium", "large"]}

let pizzaToppings = {
  sauce: [
    { name: "marinera", price:0},
    { name: "alfredo", price:1},
    { name: "buffalo", price:1},
], 
  meat: [
    { name: "pepperoni", price:0},
    { name: "sausage", price:1},
    { name: "chicken", price:1.5},
],
  vegies: [
    { name: "mushroom", price:0},
    { name: "jalapeno", price:0},
    { name:  "olive", price:0},
  ],
  cheese: [
    { name: "mozzarella",  price:2},
    { name: "parmesan",  price:0},
    { name:  "blue-cheese", price:1},
  ],
}