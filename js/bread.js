const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  alert('Thank you for downloading our menu!');
});

menuButton.addEventListener('mouseout', () => {
  menuButton.style.transform = 'scale(1)';
});

const breadPhotos = document.querySelectorAll('.bread-photo');

breadPhotos.forEach((photo) => {
  photo.addEventListener('mouseover', () => {
    photo.style.transform = 'scale(1.2)';
    photo.style.transition = 'transform 0.3s ease-in-out';
  });

  photo.addEventListener('mouseout', () => {
    photo.style.transform = 'scale(1)';
  });
});