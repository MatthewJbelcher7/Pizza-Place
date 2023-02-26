# Nite Train Pizza

#### By Matthew Belcher

## Technologies Used

* HTML 
* CSS 
* Javascript

## Description
This program will allow a user to order a pizza by imputting who the order is for, selecting a size, selecting toppings, and create a price variable that changes based on the toppings and has a scaling adjustment following the size.


### Objectives 
Constructors and prototypes are used successfully.
Application works as expected.
Tests are included for each business logic behavior and code is committed after each test passes.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place by the deadline.



### Goals
* This should show the capability to make and use objects



## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.
* Select a variety of choices of toppings and size and get a returned value

## Known Bugs

* Not fully fleshed out
* No current UI or HTMl

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2/26/2023 Matthew Belcher

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Describe: function myPizza()
Test: "It should return a pizza object"
Code: MyPizza
Expected Output: function myPizza() {}

Test: "It should return a property 'guest'."
Code: myPizza.guest
Expected Output: "matt"


Test: "It should return a property 'toppings'."
Code: myPizza.toppings
Expected Output: "pepperoni"


Test: "It should return a property 'size'."
Code: myPizza.size
Expected Output: "large"

Describe: pizzaSize
Test: "It should allow the selection of a size from an array"
Code: pizzaSize.size[2]
Expected Output:
"large"

Describe: pizzaTopping
Test: "It should have a value that can be returned"
Code: pizzaToppings.meat
Expected Output:
["pepperoni", "sausage", "chicken"]

Test: "It should have an array of different sauces that can be returned"
Code: pizzaToppings.sauce
Expected Output:
["marinera", "alfredo", "buffalo"]

Test: "It should have an array of different vegies that can be returned"
Code: pizzaToppings.vegies
Expected Output:
["mushroom", "jalapeno", "olive"]

Test: "It should have an array of different cheeses that can be returned"
Code: pizzaToppings.cheese
Expected Output:
["mozzarella", "parmesan", "blue-cheese"]

Test: "It should have a multiple values from multiple arrays that can be returned"
Code: pizzaToppings.
Expected Output:
{sauce: Array(3), meat: Array(3), vegies: Array(3), cheese: Array(3)}

Test: "It should have an array of which we can select"
Code: pizzaToppings.meat[0]
Expected Ouput: 'pepperoni'

Describe: Pizza.prototype.calculateCost
Test: "It should calculate the cost of a small pizza with no toppings"
Code: let myPizza = new Pizza("Matt", [], "small");
      myPizza.calcCost();
      myPizza.cost;
Expected Output: 12

Test: "It should calculate the cost of a large pizza with no toppings"
Code: let myPizza = new Pizza("Matt", [], "large");
      myPizza.calcCost();
      myPizza.cost;
Expected Output: 18

Test: "It should calculate the cost of a small pizza with on topping"
Code: myPizza.calcCost();
      myPizza.cost;
Expected Ouput: 16

Test: "it should calculate the cost of a large pizza two toppings"
Code: myPizza.calcCost();
  myPizza.cost;
Expected Ouput: 17 

Test:
Code:
Expected Ouput:

Test:
Code:
Expected Ouput:

Test:
Code:
Expected Ouput:

Test:
Code:
Expected Ouput:

Test:
Code:
Expected Ouput:

Test:
Code:
Expected Ouput:
