const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");


const allElements = ingredients.forEach((el, i) => {
  el = document.createElement("li");
  el.textContent = ingredients[i];
  el.classList.add("item");

  listOfIngredients.append(el)
});

