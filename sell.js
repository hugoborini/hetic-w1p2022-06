var red = document.querySelector(".red-color");
var blue = document.querySelector(".blue-color");
var grey = document.querySelector(".grey-color");
var black = document.querySelector(".black-color");
var img = document.querySelector(".t-shirt");
var sell_button = document.querySelector(".sell-button");

sell_button.addEventListener("click", function() {
  alert("Merci pour votre commande");
});
red.addEventListener("click", function() {
  img.setAttribute("src", "assets/red-shirt.png");
});

blue.addEventListener("click", function() {
  img.setAttribute("src", "assets/blue-shirt.png");
});

grey.addEventListener("click", function() {
  img.setAttribute("src", "assets/grey-shirt.png");
});

black.addEventListener("click", function() {
  img.setAttribute("src", "assets/black-shirt.png");
});
