var textWrapper = document.querySelector(".story-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

toggle = false;
elemstr = ".story-title .letter";

anime.timeline({ loop: false }).add({
  targets: elemstr,
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el, i) => 500 + 30 * i
});

var element = document.querySelector(elemstr);
var elementHeight = element.clientHeight;

document.addEventListener("scroll", animate);

function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

function animate() {
  if (inView() && !toggle) {
    toggle = true;
    anime.timeline({ loop: false }).add({
      targets: elemstr,
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    });
  }
}
