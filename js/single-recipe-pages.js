const singleRecipes = [
  {
    id: "1",
    image: {
      src: "assets/images/recipes/recipes-img/herb-bruschetta.webp",
      alt: "Herb Bruschetta",
      class: "recipe__description-img",
    },
    name: "Garlic & Herb Bruschetta",
    description: `
      1 Classic Baguette; 2 ripe tomatoes, diced; 2 cloves garlic, minced; Fresh basil leaves, chopped; 2 tbsp olive oil.
    `,
    recipeDetails: {
      ingredients: [
        "1 Crumb & Co. French baguette, sliced",
        "2 cloves garlic, finely minced",
        "2 tbsp fresh basil, chopped",
        "1 tbsp fresh parsley, chopped",
        "1 tbsp fresh oregano, chopped",
        "4 tbsp extra-virgin olive oil",
        "Salt and pepper to taste",
        "Optional: Grated Parmesan cheese or balsamic glaze for garnish",
      ],
      descriptionDetails: [
        `<h3 class="single-recipe__title">Description</h3>
            <hr />
            <p class="recipe__description-info">
          <span class="recipe__description-info-accent">Garlic & Herb Bruschetta</span>
          is a true crowd-pleaser, combining the rustic charm of our freshly baked
          <em>Crumb & Co. <span class="recipes__description-accent">French baguette</span></em>
          with a vibrant mix of aromatic herbs and rich garlic. The bread’s crisp
          texture perfectly complements the savory garlic and fresh herbs,
          creating a balanced bite that’s light yet satisfying.
        </p>`,
        `<p class="recipe__description-info">
          Ideal for any occasion, this bruschetta makes a perfect starter for a
          dinner party, a quick snack, or a flavorful side for soups and salads.
        </p>`,
      ],
    },
    recipeInstructions: {
      steps: [
        {
          title: "Preheat the Oven",
          description: "Your oven to 400°F (200°C).",
        },
        {
          title: "Prepare the Baguette",
          description:
            "Slice the Crumb & Co. French baguette into 1/2-inch thick pieces and place them on a baking sheet.",
        },
        {
          title: "Make the Garlic Herb Mixture",
          description:
            "In a small bowl, combine the minced garlic, basil, parsley, oregano, and olive oil. Add salt and pepper to taste.",
        },
        {
          title: "Brush the Baguette",
          description: "Using a brush, generously apply the garlic.",
        },
        {
          title: "Bake",
          description:
            "Place the tray in the preheated oven and bake for 8-10 minutes, or until the bread is golden and crispy.",
        },
        {
          title: "Garnish & Serve",
          description:
            "Remove from the oven and optionally garnish with grated Parmesan or a drizzle of balsamic glaze. Serve warm and enjoy!",
        },
      ],
      tips: [
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "For an extra burst of flavor, try adding diced tomatoes or roasted peppers on top before serving.",
        },
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "These bruschettas go best with dry white wine. Try them as an appetizer!",
        },
      ],
    },
  },
  {
    id: "2",
    image: {
      src: "assets/images/recipes/recipes-img/multigrain-bread.webp",
      alt: "Multigrain Bread Pudding",
      class: "recipe__description-img",
    },
    name: "Multigrain Bread Pudding",
    description: `
      A wholesome dessert made with multigrain bread, creamy custard, and hints of warm spices.
    `,
    recipeDetails: {
      ingredients: [
        "6 cups multigrain bread, cubed",
        "4 large eggs",
        "2 cups milk",
        "1 cup heavy cream",
        "3/4 cup sugar",
        "1 tsp vanilla extract",
        "1/2 tsp ground cinnamon",
        "1/4 tsp ground nutmeg",
        "Optional: Raisins or chopped nuts for garnish",
      ],
      descriptionDetails: [
        `<h3 class="single-recipe__title">Description</h3>
      <hr />
      <p class="recipe__description-info">
        <span class="recipe__description-info-accent">Multigrain Bread Pudding</span>
        is a comforting and satisfying dessert that combines the nutty flavor of
        multigrain bread with a creamy, custard-like texture.
      </p>`,
        `<p class="recipe__description-info">
        Perfect for holiday gatherings or as a cozy treat, this pudding is easy to
        prepare and endlessly customizable.
      </p>`,
      ],
    },
    recipeInstructions: {
      steps: [
        {
          title: "Preheat the Oven",
          description: "To 350°F (175°C) and grease a baking dish.",
        },
        {
          title: "Prepare the Bread",
          description:
            "Cut the multigrain bread into cubes and place them in the greased baking dish.",
        },
        {
          title: "Make the Custard",
          description:
            "In a bowl, whisk together eggs, milk, cream, sugar, vanilla, cinnamon, and nutmeg.",
        },
        {
          title: "Combine",
          description:
            "Pour the custard mixture over the bread cubes, pressing gently to soak evenly.",
        },
        {
          title: "Bake",
          description:
            "Bake for 40-45 minutes or until the top is golden and the custard is set.",
        },
        {
          title: "Serve",
          description:
            "Let cool slightly, then serve warm. Optionally garnish with raisins or nuts.",
        },
      ],
      tips: [
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "For a richer taste, use day-old multigrain bread to absorb the custard better.",
        },
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "Pair with a scoop of vanilla ice cream for an indulgent dessert.",
        },
      ],
    },
  },
  {
    id: "3",
    image: {
      src: "assets/images/recipes/recipes-img/avocado-toast.webp",
      alt: "Sourdough Avocado Toast",
      class: "recipe__description-img",
    },
    name: "Sourdough Avocado Toast",
    description: `
      A simple yet delicious breakfast or snack featuring creamy avocado on hearty sourdough bread.
    `,
    recipeDetails: {
      ingredients: [
        "4 slices sourdough bread, toasted",
        "2 ripe avocados, mashed",
        "1 tbsp lemon juice",
        "1 tbsp olive oil",
        "Salt and pepper to taste",
        "Optional: Red pepper flakes, sesame seeds, or fresh herbs for garnish",
      ],
      descriptionDetails: [
        `<h3 class="single-recipe__title">Description</h3>
      <hr />
      <p class="recipe__description-info">
        <span class="recipe__description-info-accent">Sourdough Avocado Toast</span>
        is a quick and nutritious option that’s perfect for any time of the day.
      </p>`,
        `<p class="recipe__description-info">
        The creamy avocado pairs beautifully with the tangy sourdough, creating a
        satisfying and healthy meal.
      </p>`,
      ],
    },
    recipeInstructions: {
      steps: [
        {
          title: "Prepare the Bread",
          description:
            "Toast the sourdough bread slices to your desired level of crispiness.",
        },
        {
          title: "Mash the Avocado",
          description:
            "In a bowl, mash the avocados with lemon juice, olive oil, salt, and pepper.",
        },
        {
          title: "Assemble",
          description:
            "Spread the mashed avocado mixture evenly over the toasted sourdough slices.",
        },
        {
          title: "Garnish & Serve",
          description:
            "Add optional toppings like red pepper flakes or sesame seeds. Serve immediately.",
        },
      ],
      tips: [
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "For extra protein, add a poached or fried egg on top of the avocado toast.",
        },
        {
          image: "assets/images/recipes/recipes-svg/tip.svg",
          alt: "Tip Icon",
          text: "Drizzle with balsamic glaze for a tangy finish.",
        },
      ],
    },
  },
];

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
const recipe = singleRecipes.find((r) => r.id === "1");
renderRecipeDetails(recipe);
