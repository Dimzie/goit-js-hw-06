const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);
console.log("\n");

const listOfArray = [...listEl.children];
listOfArray.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Category: ${element.lastElementChild.children.length}`);
    console.log("\n"); 
})
