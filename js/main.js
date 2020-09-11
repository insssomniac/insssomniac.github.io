const menuButton = document.querySelector("#hamburger");
const fullscreenMenu = document.querySelector("#fullscreen-menu");
const closeFsMenu = document.querySelector("#close-fs-menu");

menuButton.addEventListener('click', e => {
  e.preventDefault();
  fullscreenMenu.style.display = 'block';
  menuButton.style.display = 'none';
});

closeFsMenu.addEventListener('click', e => {
  e.preventDefault();
  fullscreenMenu.style.display = 'none';
  menuButton.style.display = '';
});