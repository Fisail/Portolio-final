const liste = document.querySelector("ul");
let media420 = window.matchMedia("(min-width: 810px");
let media430 = window.matchMedia("(min-width: 830px");


const hamburger = document.getElementById("hamburger");
let first_article_pour_hamburger = document.querySelector(".first_article")

let visible = false;

hamburger.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    visible = !visible;
    if (visible == true) {
      liste.classList.add("visible");
      first_article_pour_hamburger.style.marginTop = "0px";
    } else if (visible == false){
      liste.classList.remove("visible");
      setTimeout(() => {
        first_article_pour_hamburger.style.marginTop = "-350px";
      }, 1050); 
    }
  } else{
    first_article_pour_hamburger.style.marginTop = "0px";
  } 
});


$(document).ready(function () {
  var typed = new Typed(".texte", {
    strings: ["découvrir mon portfolio ?", "en savoir plus sur moi ?" ],
    typeSpeed: 110,
    backSpeed: 20,
    loop: true,
  });
});


//HEADER 
window.addEventListener("scroll", () => {
  if (window.scrollY > 20 && media420.matches) {
    liste.classList.add("visibleY");
  } else {
    liste.classList.remove("visibleY");
  }
});

const langage = document.querySelectorAll(".box");




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
    if (compteur == 1){
       compteur -= 1
      précédent.classList.add("disparition")
    }
    if (compteur > 1){
        compteur -= 1
        suivant.classList.remove("disparition") 
    }  
    items[compteur].classList.add("active")
})


suivant.addEventListener("click", ()=>{
    items[compteur].classList.remove("active")
    if (compteur == longueur_items-2){
      compteur += 1 
      suivant.classList.add("disparition")
      
    } 
    if (compteur < longueur_items-1){
        compteur += 1 
        précédent.classList.remove("disparition")
    }  
    items[compteur].classList.add("active")
})



/*********************CONCERNANT LES PROJETS */


let tous_les_buttons = document.querySelectorAll(".project_button")


let projets_premiere_annee = document.querySelectorAll(".projet_premiere_annee")
let projets_deuxieme_annee = document.querySelectorAll(".projet_deuxieme_annee")
let projets_troisieme_annee = document.querySelectorAll(".projet_troisieme_annee")





tous_les_buttons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    var name = bouton.getAttribute("name");
    
    projets_premiere_annee.forEach((projet) => {
      projet.classList.toggle("disparition_projets", name != "projet_premiere_annee");
    });

    projets_deuxieme_annee.forEach((projet) => {
      projet.classList.toggle("disparition_projets", name!= "projet_deuxieme_annee");
    });

    projets_troisieme_annee.forEach((projet) => {
      projet.classList.toggle("disparition_projets", name != "projet_troisieme_annee");
    });
  });
});


/*Pour vidéo*/

let videos = document.querySelectorAll('video');
console.log(videos);

videos.forEach((video) => {
  video.addEventListener('mouseover', () => {
    console.log("ok");
    video.play();
  });
  video.addEventListener('mouseout', () => {
    video.pause();
  });
});




//*********LOADERRRRR */

window.addEventListener("load", () => {
    let loader = document.querySelector('#loader');
    let loaderContainer = document.querySelector('#loader-container');
    let main = document.querySelector('main');

    loader.classList.add('hidden'); 
    loaderContainer.classList.add('hidden');
    main.classList.remove('cache_main');

    setTimeout(() => {
        loader.remove();
    }, 1000);
});
