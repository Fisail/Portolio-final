const liste = document.querySelector("ul");
/*
const hamburger = document.getElementById("hamburger");

let visible = false;

hamburger.addEventListener("click", () => {
  visible = !visible;
  if (visible == true) {
    liste.classList.add("visible");
  } else if (visible == false){
    liste.classList.remove("visible");
  }
});

*/

$(document).ready(function () {
  var typed = new Typed(".texte", {
    strings: ["découvrir mon univers ?", " en savoir plus sur moi ?"],
    typeSpeed: 110,
    backSpeed: 20,
    loop: true,
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    liste.classList.add("visibleY");
  } else {
    liste.classList.remove("visibleY");
  }
});

const first_container = document.querySelector(".first_container");
const second_container = document.querySelector(".second_container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    first_container.classList.add("visible0");
    second_container.classList.add("visible1");
  } else {
    first_container.classList.remove("visible0");
    second_container.classList.remove("visible1");
  }
});

const langage = document.querySelectorAll(".box");
const bouton_scroll = document.querySelector(".bouton_scroll");

window.addEventListener("scroll", () => {
  langage.forEach((lang) => {
    if (window.scrollY > 2500) {
      lang.classList.add("apparition0");
    }
  });
});

bouton_scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const en_savoir_plus = document.querySelector(".boutton");
en_savoir_plus.addEventListener("click", () => {
  window.scrollTo({
    top: 1050,
    behavior: "smooth",
  });
});
