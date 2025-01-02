import { recipesInfoClick } from "./recipe.js";

document.body.addEventListener("htmx:afterSettle", async () => {
  const response = await fetch("api/recipes.json");
  const singleRecipes = await response.json();

  // Спочатку додаємо елементи до DOM
  setCarouselCardInfo(singleRecipes);

  // Після додавання елементів у DOM, ініціалізуємо карусель
  setupCarousel();

  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  } else {
    console.error("Buttons .prev or .next not found in DOM after htmx load");
  }
});

let currentSlide = 0;
let slidesToShow = 1;
let slides = [];

function setCarouselCardInfo(singleRecipes) {
  let cardsHTML = singleRecipes
    .map(
      (singleRecipe) => `<article class="more-recipes__card">
        <img
          src="${singleRecipe.image.src}"
          alt="${singleRecipe.image.alt}"
          class="${singleRecipe.image.class}"
        />
        <h3 class="more-recipes__card-title">${singleRecipe.name}</h3>
        <p class="more-recipes__card-ingredients">
          <span class="more-recipes__card-ingredients-label">Ingredients:</span>
          ${singleRecipe.description}
        </p>
        <a
            href="single-recipe-1.html"
            class="recipes__card-button recipes__card-button--primary"
            data-id="${singleRecipe.id}"
          >
            Read more
          </a>

        
      </article>`
    )
    .join("");

  const cardContainer = document.querySelector(".more-recipe__carousel-track");
  if (!cardContainer) {
    console.error("Carousel track container not found.");
    return;
  }
  cardContainer.innerHTML = cardsHTML;

  document
    .querySelectorAll(".recipes__card-button")
    .forEach((link) => link.addEventListener("click", recipesInfoClick));
}

function updateSlidesToShow() {
  slidesToShow = window.innerWidth >= 750 ? 2 : 1;
  slidesToShow = window.innerWidth >= 950 ? 3 : 2;

  updateCarousel();
}

function updateCarousel() {
  console.log(`Current slide: ${currentSlide}`);
  const track = document.querySelector(".more-recipe__carousel-track");

  if (!track || slides.length === 0) {
    console.error("Carousel track or slides not found in DOM.");
    return;
  }

  const slideWidth = slides[0]?.offsetWidth || 0;
  const gap = 32;

  if (currentSlide >= slides.length - 2) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;
}

function prevSlide() {
  console.log("Prev button clicked");

  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 3;
  updateCarousel();
}

function nextSlide() {
  console.log("Next button clicked");

  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateCarousel();
}

function setupCarousel() {
  const track = document.querySelector(".more-recipe__carousel-track");
  slides = Array.from(document.querySelectorAll(".more-recipes__card"));

  if (!track || slides.length === 0) {
    console.error("Carousel track or slides not found in DOM.");
    return;
  }

  // Remove existing clones
  slides = slides.filter((slide) => !slide.classList.contains("clone"));

  // Add clones at the start and end for infinite looping
  const clonesStart = slides.slice(-slidesToShow).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesToShow).map(cloneSlide);

  // Clear track and append new slides
  track.innerHTML = "";
  track.append(...clonesStart, ...slides, ...clonesEnd);

  // Update the slides array
  slides = Array.from(track.children);

  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("clone");
  return clone;
}

window.addEventListener("resize", () => {
  setupCarousel();
  updateSlidesToShow();
});
