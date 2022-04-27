const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
const elements = ingredients.map((ingredient) => {
  const newEl = document.createElement('li');
  newEl.className = 'item';
  newEl.textContent = ingredient;
  return newEl;

})

list.append(...elements);
