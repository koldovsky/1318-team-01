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
const transitionTime = 500;

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
function setupCarousel() {
  const track = document.querySelector(".more-recipe__carousel-track");
  slides = Array.from(document.querySelectorAll(".more-recipes__card"));

  if (!track || slides.length === 0) {
    console.error("Carousel track or slides not found in DOM.");
    return;
  }

  // Remove existing clones
  slides = slides.filter((slide) => !slide.classList.contains("clone"));

  // Додаємо клони
  const clonesStart = slides.map(cloneSlide);
  const clonesEnd = slides.map(cloneSlide);

  // Додаємо клони до DOM
  clonesStart.forEach((clone) => track.appendChild(clone));
  clonesEnd.forEach((clone) => track.insertBefore(clone, slides[0]));

  // Оновлюємо масив слайдів
  slides = Array.from(track.children);

  // Встановлюємо початкову позицію
  const initialOffset = clonesStart.length;
  currentSlide = initialOffset;
  updateCarousel(false);
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("clone");
  return clone;
}

function updateCarousel(animate = true) {
  console.log(`Current slide: ${currentSlide}`);
  const track = document.querySelector(".more-recipe__carousel-track");
  const slideWidth = slides[0]?.offsetWidth || 0;
  const gap = 32;

  if (!track) {
    console.error("Carousel track or slides not found in DOM.");
    return;
  }

  // Анімація
  track.style.transition = animate
    ? `transform ${transitionTime}ms ease`
    : "none";
  track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;

  // Плавне перемикання до "оригінального" слайда
  setTimeout(
    () => {
      if (currentSlide >= slides.length - slides.length / 3) {
        currentSlide = slides.length / 3;
        track.style.transition = "none";
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      } else if (currentSlide < slides.length / 3) {
        currentSlide = slides.length - (slides.length / 3) * 2;
        track.style.transition = "none";
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    },
    animate ? transitionTime : 0
  );
}

function nextSlide() {
  currentSlide++;
  updateCarousel();
}

function prevSlide() {
  currentSlide--;
  updateCarousel();
}

window.addEventListener("resize", () => updateCarousel(false));
