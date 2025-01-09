const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/files/On-The-Rise-Bread-Menu.pdf";
  link.download = "On-The-Rise-Bread-Menu.pdf";
  link.click();
  alert("Thank you for downloading our menu!");
});

menuButton.addEventListener("mouseout", () => {
  menuButton.style.transform = "scale(1)";
});

const breadPhotos = document.querySelectorAll(".bread-photo");

breadPhotos.forEach((photo) => {
  photo.addEventListener("mouseover", () => {
    photo.style.transform = "scale(1.2)";
    photo.style.transition = "transform 0.3s ease-in-out";
  });

  photo.addEventListener("mouseout", () => {
    photo.style.transform = "scale(1)";
  });
});
