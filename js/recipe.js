const response = await fetch("api/recipes.json");
const singleRecipes = await response.json();
SetRecipes(singleRecipes);

function SetRecipes(singleRecipes) {
  const recipesToShow = singleRecipes.slice(0, 3);
  let recipesHTML = "";
  for (const singleRecipe of recipesToShow) {
    recipesHTML += `
         <article class="recipe__card">
          <img
            src="${singleRecipe.image.src}"
            alt="${singleRecipe.image.alt}"
            class="${singleRecipe.image.class}"
          />
          <h3 class="recipe__card-title">${singleRecipe.name}</h3>
          <hr class="recipe__card-divider" />
          <p class="recipe__card-ingredients">
            <span class="recipe__card-ingredients-label">Ingredients:</span> ${singleRecipe.description.trim()}
          </p>
          <a
            href="single-recipe-1.html"
            class="recipes__card-button recipes__card-button--primary"
            data-id="${singleRecipe.id}"
          >
            Read more
          </a>
        </article>
    `;
  }

  const RecipesContainer = document.querySelector(".recipes");
  if (RecipesContainer) {
    RecipesContainer.innerHTML = recipesHTML;

    document
      .querySelectorAll(".recipes__card-button")
      .forEach((link) => link.addEventListener("click", recipesInfoClick));
  }
}

// Викликаємо функцію після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  SetRecipes(singleRecipes);
});

export function recipesInfoClick(ev) {
  ev.preventDefault();
  const singleRecipeId = ev.target.dataset.id;
  const singleRecipe = singleRecipes.find(
    (singleRecipe) => singleRecipe.id === singleRecipeId
  );

  if (singleRecipe) {
    localStorage.singleRecipe = JSON.stringify(singleRecipe);
    window.location.href = `single-recipe-1.html`;
  } else {
    console.error(`Recipe with ID ${singleRecipeId} not found.`);
  }
}
