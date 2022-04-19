const listUlCategories = document.querySelectorAll('li.item');

console.log('Number of categories:', listUlCategories.length);

for (const item of listUlCategories) {
    
    const categoriesTitle = item.firstElementChild.textContent;
    console.log('Category:', categoriesTitle);

    const numberOfElements = item.children[1].children.length;
    console.log('Elements:', numberOfElements);
}