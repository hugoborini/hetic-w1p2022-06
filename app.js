const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const navSlide = () => {
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function() {
    burger.classList.toggle("open");
    nav.classList.toggle("nav-show");
  });
};

navSlide();
