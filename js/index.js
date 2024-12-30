function init() {
  import("./header.js");
  import("./recipe.js");
  import("./sweet-treats-carousel.js");
  import("./locations-carousel.js");
  import("./chef-advantages-carousel.js");
  import("./chef-advantages-list.js");

}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
