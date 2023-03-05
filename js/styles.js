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
      this.toppings.sauce.forEach(function(sauce) {
        cost += sauce.price;
      });
      this.toppings.meat.forEach(function(meat) {
        cost += meat.price;
      });
      this.toppings.veggis.forEach(function(veg) {
        cost += veg.price;
      });
      this.toppings.cheese.forEach(function(cheese) {
        cost += cheese.price;
      });

      switch (this.size) {
          case "small":
            cost *= 1.0;
            break;
          case "medium":
            cost *= 1.2;
            break;
          case "large":
            cost *= 1.4;
            break;
          default:
            break;
        }

  return cost;
  };
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
  veggies: [
    { name: "mushroom", price:0},
    { name: "jalapeno", price:0},
    { name:  "olive", price:0},
  ],
  cheese: [
    { name: "mozzarella",  price:2},
    { name: "parmesan",  price:0},
    { name:  "blue-cheese", price:1},
  ],
};

// User Logic
const pizzaForm = document.getElementById("pizza-form");
pizzaForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const size = document.querySelector('input[name="size"];checked').value;
  const sauce = document.querySelector('input[name="sauce"];checked');
  const meat = document.querySelector('input[name="meat"];checked');
  const vegies = document.querySelector('input[name="vegi"];checked');
  const cheese = document.querySelector('input[name="cheese"];checked');

  console.log('Order for ${name}!');
});  