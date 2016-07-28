# Final Code Review for Object-Oriented Javascript

### A web app to calculate the cost of an order for vegan pizza. :pizza:

### By Zach Holz

## Features
This web app allows a user to select from a size, cheese and topping mix, and calculates the total cost for them upon submitting the form.

1. If user orders small pizza, basic cheese, and no toppings, their pizza costs $6.
  * Input: Petite Pizza, cashew cheese, no toppings.
  * Output: $7

2. If user orders small pizza, basic cheese, and any topping, cost is $6 + $1 + $1x/per topping.
  * Input: Petite Pizza, cashew cheese, artichoke hearts & seitan sausage
  * Output: $9

3. If user orders other size of pizza, "smallish" costs $8, "middling" costs $11, and "pretty big" costs $13.
  * Input: Pretty big, cashew cheese, no toppings.
  * Output: $14

4. If user does not choose a cheese or a pizza size, return an error to prompt them to check their selection.
  * This feature still needs to be developed!

5. Allow user to create more than one pizza, and get accurate cost for each new pizza.
  * This feature is also still in development. 

## To setup:
* Clone this repo to your heart's content.
* Edit away.

Currently, this project is hosted on a [Github page](http://zachholz.github.io/pizza).

## Known Bugs

Currently, the application does not support submitting multiple requests for different pizzas.

Additionally, if a size or a cheese type are not selected, and the form is submitted, the user will see that their pizza costs $NaN. I am working on writing an effective error message for these cases.

## Support and Contact Details

If you have questions, please write to me at zach.a.holz@gmail.com.

## Technologies Used

For this project, I used:

* HTML
* CSS (including Bootstrap)
* Javascript (including jQuery)

### License

GPL, free to use.

Copyright (c) 2016 Zach Holz
