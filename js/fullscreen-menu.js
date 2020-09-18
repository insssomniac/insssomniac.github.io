const menuButton = document.querySelector("#hamburger");
const fullscreenMenu = document.querySelector("#fullscreen-menu");
const closeFsMenu = document.querySelector("#close-fs-menu");
const menuLinks = fullscreenMenu.querySelectorAll(".menu__link");

function toggleMenu() {
  menuButton.classList.toggle('hamburger--active');
  fullscreenMenu.classList.toggle('fullscreen-menu--active')
}

menuButton.addEventListener('click', toggleMenu);
closeFsMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMenu);
});
