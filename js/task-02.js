const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("#ingredients");

const dir = document.createDocumentFragment();
const allElements = ingredients.forEach((el, i) => {
  el = document.createElement("li");
  el.textContent = ingredients[i];
  el.classList.add("item");
  dir.appendChild(el);
});

listOfIngredients.appendChild(dir);