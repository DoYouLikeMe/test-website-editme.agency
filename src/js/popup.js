import {toggleScroll} from "./toggleScroll";

const popup = document.querySelector(".popup");
const reserveButton = document.querySelector(".reserve-btn");
const overlay = document.querySelector(".popup__overlay");
const closeBtn = document.querySelector(".popup__close");

const showPopup = function () {
  toggleScroll();
  popup.classList.add("popup_active");
};

const closePopup = function () {
  toggleScroll();
  popup.classList.remove("popup_active");
};

reserveButton.addEventListener("click", showPopup);
overlay.addEventListener("click", closePopup);
closeBtn.addEventListener("click", closePopup);
