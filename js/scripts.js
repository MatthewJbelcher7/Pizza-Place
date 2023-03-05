 // Business Logic
const pizzaPrices = {
  small: 12,
  medium: 16,
  large: 18,
};

function Pizza(pizzaGuest, pizzaToppings, pizzaSize) {
  this.guest = pizzaGuest;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}  

Pizza.prototype.calcCost = function() {
  let cost = pizzaPrices[this.size] || 0;

      this.toppings.sauce.forEach(function(sauce) {
        cost += sauce.price;
      });
      this.toppings.meat.forEach(function(meat) {
        cost += meat.price;
      });
      this.toppings.veggies.forEach(function(veg) {
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
  const name = document.getElementById("guest-name").value;
  const size = document.querySelector('input[name="size"];checked').value;
  const sauce = document.querySelector('input[name="sauce"];checked').value;
  const meat = document.querySelector('input[name="meat"];checked').value;
  const veggies = document.querySelector('input[name="veggies"];checked').value;
  const cheese = document.querySelector('input[name="cheese"];checked').value;

  const pizza = new Pizza(name, pizzaToppings, size);
  const cost = pizza.calcCost();

  console.log(`Order for ${name}! with a ${size} pizza for $${cost}`);
});  