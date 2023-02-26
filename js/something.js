 // Business Logic

function Pizza(pizzaGuest, pizzaToppings, pizzaSize) {
  this.guest = pizzaGuest;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;

  this.calculateCost = function() {
  }
} 

let pizzaSize = {size: ["small", "medium", "large"]}

let pizzaToppings = {
  sauce: ["marinera", "alfredo", "buffalo"],
  meat: ["pepperoni", "sausage", "chicken"],
  vegies: ["mushroom", "jalapeno", "olive"],
  cheese: ["mozzarella", "parmesan", "blue-cheese"],
}