const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-block");

btnSub.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    header.classList.toggle("nav-visible");
  });
  
  navLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
  });
  
const headerHype = document.querySelector(".header__hype");
const headerCloneHypeContainer = document.querySelector(".header__clone-hype");

function cloneHeaderHype() {
  if (window.innerWidth >= 1000) {
    if (!headerCloneHypeContainer.querySelector(".header__hype")) {
      const clonedHype = headerHype.cloneNode(true);
      headerCloneHypeContainer.appendChild(clonedHype);
    }
    headerHype.style.display = "none";
  } else {
    headerCloneHypeContainer.innerHTML = "";
    headerHype.style.display = "flex";
  }
}

cloneHeaderHype();
window.addEventListener("resize", cloneHeaderHype);


