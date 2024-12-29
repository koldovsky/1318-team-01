const list = document.querySelector(".sweet-treats__list");
const prevButton = document.querySelector(".sweet-treats__button-prev");
const nextButton = document.querySelector(".sweet-treats__button-next");
const cards = document.querySelectorAll(".sweet-treats__card");
let currentPosition = 0;
let cardWidth;
let gap;

function updateCarouselValues() {
  cardWidth = cards[0].offsetWidth;
  gap = parseInt(window.getComputedStyle(list).gap);
}

nextButton.addEventListener("click", () => {
  updateCarouselValues(); // Update values before scrolling
  currentPosition++;
  if (currentPosition >= cards.length) {
    currentPosition = 0;
  }
  scrollToCard();
});

prevButton.addEventListener("click", () => {
  updateCarouselValues(); // Update values before scrolling
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = cards.length - 1;
  }
  scrollToCard();
});

function scrollToCard() {
  list.scrollTo({
    left: (cardWidth + gap) * currentPosition,
    behavior: "smooth",
  });
}
