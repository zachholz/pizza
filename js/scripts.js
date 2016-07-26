// business logic
// global variables

var pizzaCost = 0;
var size = "";
var cheese = "";
var toppings = [];
var finalPizzaCost = 0;

//pizza constructor
function Pizza(sizes, cheese, toppings) {
  this.sizes = sizes;
  this.cheese = cheese;
  this.toppings = toppings;
}

//pizza prototypes
Pizza.prototype.toppingsSum = function(topping) {
  var totalToppings = this.toppings.length;
  return pizzaCost += totalToppings;
}

Pizza.prototype.totalPizzaCost = function(sizes, cheese, toppings) {
  return finalPizzaCost = this.sizes + this.cheese + pizzaCost
}

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    userSize = parseInt($("input:radio[name=size]:checked").val());
    userCheese = parseInt($("input:radio[name=cheese]:checked").val());
    userToppings = $("input:checkbox:checked").map(function() {
      return this.value;
    }).get();

    var yourPizza = new Pizza(userSize, userCheese, userToppings);

    yourPizza.toppingsSum();
    yourPizza.totalPizzaCost();

  });
});
