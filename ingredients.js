var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:


var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for (i in ingredients){
  console.log(ingredients[i]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nBACKWARDS: \n');

for (var i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}