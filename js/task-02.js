const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getIngredients = document.querySelector("#ingredients");
console.log(getIngredients);

const newIngredientsList = ingredients => {

  return ingredients.map(element => {

  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;

  return itemEl;
})};

getIngredients.append(...newIngredientsList(ingredients));
