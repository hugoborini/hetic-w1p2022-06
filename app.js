const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-mobile");
const body = document.querySelector("body");
const size = document.querySelector(".size-select li");
const navSlide = () => {
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function() {
    burger.classList.toggle("open");
    nav.classList.toggle("nav-show");
  });
  size.addEventListener("click", () => {
    size.classList.toggle("size-select-grey ");
  });
};

navSlide();
