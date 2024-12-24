let currentSlide = 0;

function updateCarousel() {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;

  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  document.querySelector(".sweet-treats__button-prev").disabled =
    currentSlide === 0;
  document.querySelector(".sweet-treats__button-next").disabled =
    currentSlide === totalSlides - 1;
}

function nextSlide() {
  const carousel = document.getElementById("carousel");
  if (currentSlide < carousel.children.length - 1) {
    currentSlide++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});
