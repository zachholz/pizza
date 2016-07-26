// business logic
// global variables

var pizzaCost = 0;
var size = "";
var cheese = "";
var toppings = [],

//pizza constructor
function Pizza(size, cheese, toppings) {
  this.size = size;
  this.cheese = cheese;
  this.toppings = toppings;
}

//pizza prototype
Pizza.prototype.toppingsSum = function(topping) {
  yourPizza.topppings.forEach(function(topping) {
    return pizzaCost +=
  })
}

// user interface logic
$(document).ready(function() {
  $("form#pizza-choices").submit(function(event) {
    size = $("input:radio[name=size]:checked").val();
    cheese = $("input:radio[name=cheese]:checked").val();
    toppings = $("input:checkbox:checked").map(function() {
      return this.value;
    }).get();
  });
});
