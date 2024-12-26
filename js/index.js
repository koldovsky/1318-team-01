function init() {
  import("./header.js");
  import("./recipe.js");
  import("./single-recipe.js");
  import("./sweet-treats-carousel.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
