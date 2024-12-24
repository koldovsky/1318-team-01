const sweetTreatsContainer = document.querySelector(".sweet-treats__list");
const sweetTreatsCards = document.querySelectorAll(".sweet-treats__card");
const prevButton = document.querySelector(".sweet-treats__button-prev");
const nextButton = document.querySelector(".sweet-treats__button-next");
const cardWidth = sweetTreatsCards.length > 0 ? sweetTreatsCards[0].offsetWidth : 0;
let currentIndex = 0;

function updateCarousel() {
  sweetTreatsContainer.style.transform = 'translateX(-' + (currentIndex * cardWidth) + 'px)';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sweetTreatsCards.length;
  if (sweetTreatsContainer) {
    updateCarousel();
  }
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + sweetTreatsCards.length) % sweetTreatsCards.length;
  updateCarousel();
}

if (nextButton) {
  nextButton.addEventListener("click", nextSlide);
}

if (prevButton) {
  prevButton.addEventListener("click", prevSlide);
}

updateCarousel();
