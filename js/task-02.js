const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients');
console.log(ingredients);
ingredients.map((ingredient) => {
  const newEl = document.createElement('li');
  newEl.className = 'item';
  newEl.textContent = ingredient;
  list.append(newEl);

})

console.log(list);
