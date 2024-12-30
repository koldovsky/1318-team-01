import { renderRecipeDetails } from "./single-recipe-pages.js";
document.addEventListener("htmx:afterSettle", () => {
  function showInfo() {
    const singleRecipe = JSON.parse(localStorage.singleRecipe || "{}");
    if (!singleRecipe || !Object.keys(singleRecipe).length) {
      console.error("No recipe data found in localStorage.");
      return;
    }

    // Виклик функції для рендерингу
    renderRecipeDetails(singleRecipe);
  }

  showInfo();
});
