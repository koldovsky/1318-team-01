const response = await fetch("api/recipes.json");
const singleRecipes = await response.json();

const RecipeUtils = {
  renderHero(name) {
    return `<h3 class="single-header__hero-title">${name}</h3>
  <p class="single-header__hero-subtitle">
    <a class="single-recipe__header__hero__home-link" href="index.html"
                >Home > </a
              >
    <span class="single-header__hero-subtitle-link"
      >${name}</span
    >
  </p>`;
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
    return descriptionDetails.join("");
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
export const renderRecipeDetails = (recipe) => {
  if (!recipe) {
    console.error("Recipe not found or undefined.");
    return;
  }

  //Render hero
  RecipeUtils.renderElement(
    ".single-header__hero",
    RecipeUtils.renderHero(recipe.name),
    "hero header not found in the DOM."
  );
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
