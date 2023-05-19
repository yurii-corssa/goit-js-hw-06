const categoryRefs = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryRefs.length}`);

categoryRefs.forEach((category) => {
  const title = category.firstElementChild;
  const listItems = category.lastElementChild.children;

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${listItems.length}`);
});
