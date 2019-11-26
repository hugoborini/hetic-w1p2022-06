const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const search = document.querySelector(".search");
const searchForm = document.querySelector(".search-form");
const searchclose = document.querySelector(".search-close ");
const burgerLine1 = document.querySelector(".line1");
const burgerLine2 = document.querySelector(".line2");
const burgerLine3 = document.querySelector(".line3");
const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burgerLine2.classList.toggle("mid-line");
    burgerLine3.classList.toggle("up-line");
  });

  search.addEventListener("click", () => {
    searchForm.classList.toggle("display-show");
  });

  searchclose.addEventListener("click", () => {
    searchForm.classList.toggle("display-show");
  });
};

navSlide();
