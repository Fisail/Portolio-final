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
  if (window.scrollY > 20){
    liste.classList.add("visibleY");
  } else {
    liste.classList.remove("visibleY");
  }
});
