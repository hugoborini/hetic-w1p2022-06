const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const size = document.querySelector(".size-select li");
const navSlide = () => {
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function() {
    burger.classList.toggle("open");
    nav.classList.toggle("nav-show");
  });
};

navSlide();

var article_tab = document.querySelectorAll(".sub-article");

article_tab.forEach(element => {
  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached");
    },
    offset: "50%"
  });
});
