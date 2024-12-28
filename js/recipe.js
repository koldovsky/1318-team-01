const response = await fetch("api/recipes.json");
const singleRecipes = await response.json();
SetRecipes(singleRecipes);

function SetRecipes(singleRecipes) {
  let recipesHTML = "";
  for (const singleRecipe of singleRecipes) {
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
            href="single-recipe-${singleRecipe.id}.html"
            class="recipes__card-button recipes__card-button--primary"
            data-id="${singleRecipe.id}"
          >
            Read more
          </a>
        </article>
    `;
  }
  const RecipesContainer = document.querySelector(".recipes");
  RecipesContainer.innerHTML = recipesHTML;
}

SetRecipes(singleRecipes);

const RecipeUtils = {
  renderHero(name) {
    return `<h3 class="single-header__hero-title">${name}</h3>
  <p class="single-header__hero-subtitle">
    Home >
    <span class="single-header__hero-subtitle-link"
      >${name}</span
    >
  </p>`.join("");
  },

  renderIngredients(ingredients) {
    return ingredients
      .map(
        (ingredient) =>
          `<li class="recipe__ingredients-item">${ingredient}</li>`
      )
      .join("");
  },

  renderDescription(descriptionDetails) {
    return descriptionDetails.join(""); // Directly use the HTML strings
  },

  renderImage({ src, alt, class: className }) {
    return `<img src="${src}" alt="${alt}" class="${className}" />`;
  },

  renderInstructions(steps) {
    return steps
      .map(
        ({ title, description }) => `
        <li class="recipe__instruction-item">
          <strong class="recipe__instruction-item-accent">${title}</strong>
          ${description}
        </li>`
      )
      .join("");
  },

  renderTips(tips) {
    return tips
      .map(
        ({ image, alt, text }) => `
        <figure class="recipe__instruction-tip">
          <img src="${image}" alt="${alt}" class="recipe__instruction-tip-img" />
          <figcaption class="recipe__instruction-text">
            <strong class="recipe__instruction-text-accent">Useful tip:</strong> ${text}
          </figcaption>
        </figure>`
      )
      .join("");
  },

  renderElement(containerSelector, content, errorMessage) {
    const container = document.querySelector(containerSelector);
    if (container) {
      container.innerHTML = content;
    } else {
      console.error(errorMessage || `Element not found: ${containerSelector}`);
    }
  },
};

// Універсальна функція для рендерингу всіх деталей рецепта
const renderRecipeDetails = (recipe) => {
  if (!recipe) {
    console.error("Recipe not found or undefined.");
    return;
  }

  // Render ingredients
  RecipeUtils.renderElement(
    ".recipe__ingredients-list",
    RecipeUtils.renderIngredients(recipe.recipeDetails.ingredients),
    "Ingredients list container not found in the DOM."
  );

  // Render description
  RecipeUtils.renderElement(
    ".recipe__description-container",
    RecipeUtils.renderDescription(recipe.recipeDetails.descriptionDetails),
    "Description container not found in the DOM."
  );

  // Render image
  RecipeUtils.renderElement(
    ".recipe__description-img-container",
    RecipeUtils.renderImage(recipe.image),
    "Image container not found in the DOM."
  );

  // Render instructions
  RecipeUtils.renderElement(
    ".recipe__instruction-list",
    RecipeUtils.renderInstructions(recipe.recipeInstructions.steps),
    "Instruction list container not found in the DOM."
  );

  // Render tips
  RecipeUtils.renderElement(
    ".recipe__instruction-tips",
    RecipeUtils.renderTips(recipe.recipeInstructions.tips),
    "Tips container not found in the DOM."
  );
};

// Пошук рецепта з ID "2" та рендеринг
const recipe = singleRecipes.find((r) => r.id === "2");
renderRecipeDetails(recipe);
