const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addListIngredients = (ingredients) => {
  const ingredientsRef = document.querySelector("#ingredients");

  const createMarkupListItem = ingredients.map((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.className = "item";
    ingredientItem.textContent = ingredient;
    return ingredientItem;
  });

  ingredientsRef.append(...createMarkupListItem);
};

addListIngredients(ingredients);
