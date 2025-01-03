const carousel = document.querySelector(".catering__carousel-images");
const items = Array.from(document.querySelectorAll(".catering__carousel-item"));
const prevButton = document.querySelector(".catering__carousel-button-left");
const nextButton = document.querySelector(".catering__carousel-button-right");

let currentIndex = 0;
const totalItems = items.length;

items.forEach((item) => {
    const cloneBefore = item.cloneNode(true);
    const cloneAfter = item.cloneNode(true);
    carousel.appendChild(cloneAfter);
    carousel.insertBefore(cloneBefore, carousel.firstChild);
});

const updateCarousel = () => {
    const itemWidth = items[0].offsetWidth;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;
};

const nextSlide = () => {
    const itemWidth = items[0].offsetWidth;
    currentIndex++;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;

    if (currentIndex >= totalItems) {
        setTimeout(() => {
            carousel.style.transition = "none";
            currentIndex = 0;
            carousel.style.transform = `translateX(-${totalItems * itemWidth}px)`;
        }, 500);
    }
};

const prevSlide = () => {
    const itemWidth = items[0].offsetWidth;
    currentIndex--;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;

    if (currentIndex < 0) {
        setTimeout(() => {
            carousel.style.transition = "none";
            currentIndex = totalItems - 1;
            carousel.style.transform = `translateX(-${(currentIndex + totalItems) * itemWidth}px)`;
        }, 500);
    }
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

window.addEventListener("resize", updateCarousel);

updateCarousel();
