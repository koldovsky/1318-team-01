const recipes = [
  {
    id: "1",
    image: "assets/images/recipes/recipes-img/herb-bruschetta.webp",
    name: "Garlic & Herb Bruschetta",
    description:
      " 1 Classic Baguette; 2 ripe tomatoes, diced; 2 cloves garlic, minced; Fresh basil leaves, chopped; 2 tbsp olive oil.",
  },

  {
    id: "2",
    image: "assets/images/recipes/recipes-img/multigrain-bread.webp",
    name: "Multigrain Bread Pudding",
    description:
      " 1 Classic Baguette; 2 ripe tomatoes, diced; 2 cloves garlic, minced; Fresh basil leaves, chopped; 2 tbsp olive oil.",
  },
  {
    id: "3",
    image: "assets/images/recipes/recipes-img/avocado-toast.webp",
    name: "Sourdough Avocado Toast",
    description:
      " 1 Sourdough Bread, sliced; 1 large ripe avocado; 1 tbsp lemon; 1 tbsp olive oil; Salt and pepper, to taste.",
  },
];

function SetRecipes(recipes) {
  let recipesHTML = "";
  for (const recipe of recipes) {
    recipesHTML += `
        <article class="recipe__card">
      <img
        src="${recipe.image}"
        alt="Herb Bruschetta"
        class="recipe__card-img"
      />
      <h3 class="recipe__card-title">${recipe.name}</h3>
      <hr class="recipe__card-divider" />
      <p class="recipe__card-ingredients">
        <span class="recipe__card-ingredients-label">Ingredients:</span> ${recipe.description}
      </p>
      <a
        href="single-recipe-1.html"
        class="recipes__card-button recipes__card-button--primary"
        >Read more</a
      >
    </article>
    `;
  }
  const RecipesContainer = document.querySelector(".recipes");
  RecipesContainer.innerHTML = recipesHTML;
}

SetRecipes(recipes);
