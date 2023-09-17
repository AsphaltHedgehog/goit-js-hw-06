const listOfCategories = document.querySelector("ul#categories");

const itemsOfList = listOfCategories.querySelectorAll("li.item");

console.log(`Number of categories: ${itemsOfList.length}`);

// function
itemsOfList.forEach (el => {
  const categoryName = el.querySelector("h2").textContent;

  const numbersOfElements = el.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  
  console.log(`Elements: ${numbersOfElements}`);
});
