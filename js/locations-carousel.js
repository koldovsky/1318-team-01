const carousel = document.querySelector(".locations__carousel-images");
const items = Array.from(document.querySelectorAll(".locations__carousel-item"));
const prevButton = document.querySelector(".locations__carousel-control--left");
const nextButton = document.querySelector(".locations__carousel-control--right");

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

let autoScrollInterval = setInterval(nextSlide, 3000);

carousel.addEventListener("mouseover", () => clearInterval(autoScrollInterval));
carousel.addEventListener("mouseout", () => {
    autoScrollInterval = setInterval(nextSlide, 3000);
});

window.addEventListener("resize", updateCarousel);

updateCarousel();