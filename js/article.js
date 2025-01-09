const container = document.querySelector('.cards-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Функція для прокрутки вліво
scrollLeftButton.addEventListener('click', () => {
  container.scrollBy({
    left: -300, // Прокрутка на ширину однієї картки
    behavior: 'smooth',
  });
});

// Функція для прокрутки вправо
scrollRightButton.addEventListener('click', () => {
  container.scrollBy({
    left: 300, // Прокрутка на ширину однієї картки
    behavior: 'smooth',
  });
});
