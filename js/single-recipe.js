document.body.addEventListener("htmx:afterSettle", () => {
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

function updateSlidesToShow() {
  slidesToShow = window.innerWidth >= 750 ? 2 : 1; // Два елементи при ширині >= 750px
  slidesToShow = window.innerWidth >= 950 ? 3 : 2; // Два елементи при ширині >= 750px

  updateCarousel();
}

function updateCarousel() {
  console.log(`Current slide: ${currentSlide}`);
  const track = document.querySelector(".more-recipe__carousel-track");
  const slides = document.querySelectorAll(".more-recipes__card");
  const slideWidth = slides[0].offsetWidth;
  const gap = 32;
  track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;
}

function prevSlide() {
  console.log("Prev button clicked");

  const slides = document.querySelectorAll(".more-recipes__card");
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  updateCarousel();
}

function nextSlide() {
  console.log("next button clicked");

  const slides = document.querySelectorAll(".more-recipes__card");
  currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
  updateCarousel();
}

window.addEventListener("resize", updateCarousel);
