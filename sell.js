var red = document.querySelector(".color-select label:nth-child(2)");
var blue = document.querySelector(".color-select label:nth-child(4)");
var grey = document.querySelector(".color-select label:nth-child(6)");
var black = document.querySelector(".color-select label:nth-child(8)");
var img = document.querySelector(".shirt-front");
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
