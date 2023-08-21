import {toggleScroll} from "./toggleScroll";

const btnMobile = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

window.onload = () => {
  mobileMenu.classList.add("mobile-menu_animated");
};

const toggleMenu = function () {
  toggleScroll();
  btnMobile.classList.toggle("mobile-menu-button_active");
  mobileMenu.classList.toggle("mobile-menu_active");
};

btnMobile.addEventListener("click", toggleMenu);

mobileMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target.closest(".mobile-menu__link");
  if (link) return;
  toggleMenu();
});
