document.body.addEventListener("htmx:afterSettle", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  } else {
    console.error("Buttons .prev or .next not found in DOM after htmx load");
  }

  setupCarousel();
});

let currentSlide = 0;
let slidesToShow = 1;
let slides = [];

function updateSlidesToShow() {
  slidesToShow = window.innerWidth >= 750 ? 2 : 1; // Two items for width >= 750px
  slidesToShow = window.innerWidth >= 950 ? 3 : 2; // Three items for width >= 950px

  updateCarousel();
}

function updateCarousel() {
  console.log(`Current slide: ${currentSlide}`);
  const track = document.querySelector(".more-recipe__carousel-track");

  if (!track || slides.length === 0) {
    console.error("Carousel track or slides not found in DOM.");
    return;
  }

  const slideWidth = slides[0]?.offsetWidth || 0; // Ensure slides[0] exists
  const gap = 32;

  track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;
}

function prevSlide() {
  console.log("Prev button clicked");

  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
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

window.addEventListener("DOMContentLoaded", () => {
  setupCarousel();
  updateSlidesToShow();
});
