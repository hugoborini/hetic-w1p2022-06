const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const search = document.querySelector(".search");
const searchForm = document.querySelector(".search-form");
const searchclose = document.querySelector(".search-close ");

const navSlide = () => {
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function() {
    burger.classList.toggle("open");
    nav.classList.toggle("nav-show");
  });
};

navSlide();
