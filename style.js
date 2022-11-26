const liste = document.querySelector("ul");
let media420 = window.matchMedia("(min-width: 810px");
let media430 = window.matchMedia("(min-width: 830px");


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



$(document).ready(function () {
  var typed = new Typed(".texte", {
    strings: ["découvrir mon portfolio ?", " en savoir plus sur moi ?"],
    typeSpeed: 110,
    backSpeed: 20,
    loop: true,
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20 && media420.matches) {
    liste.classList.add("visibleY");
  } else {
    liste.classList.remove("visibleY");
  }
});
/*
const first_container = document.querySelector(".first_container");
const second_container = document.querySelector(".second_container");


window.addEventListener("scroll", () => {
  if (window.scrollY > 200 && media430.matches) {
    first_container.classList.add("visible0");
    second_container.classList.add("visible1");
  } else {
    first_container.classList.remove("visible0");
    second_container.classList.remove("visible1");
  }
});
*/
const langage = document.querySelectorAll(".box");


window.addEventListener("scroll", () => {
  langage.forEach((lang) => {
    if (window.scrollY > 2500) {
      lang.classList.add("apparition0");
    }
  });
});



const en_savoir_plus = document.querySelector("#scroll");
en_savoir_plus.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const items = document.querySelectorAll(".container_parcours")

const longueur_items = items.length;
console.log(longueur_items)

const précédent = document.getElementById("fleche_left")
const suivant = document.getElementById("fleche_right")


let compteur  = 0 


let fleche = 0


précédent.addEventListener("click", ()=>{
    items[compteur].classList.remove("active")
    if (compteur > 0){
        compteur -= 1
        suivant.classList.remove("disparition") 
    } else if (compteur == 0){
      précédent.classList.add("disparition")
    }

    console.log(compteur);
    items[compteur].classList.add("active")
})


suivant.addEventListener("click", ()=>{
    items[compteur].classList.remove("active")
    if (compteur < longueur_items - 1){
        compteur += 1 
        console.log(compteur)
        précédent.classList.remove("disparition")
    } else if (compteur == longueur_items-1){
      suivant.classList.add("disparition")
    }

 
    console.log(compteur);

    items[compteur].classList.add("active")
})
