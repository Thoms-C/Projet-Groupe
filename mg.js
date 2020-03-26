let navOpenBtn = document.querySelector(".nav-open-btn");
let navCloseBtn = document.querySelector(".nav__close");
let nav = document.querySelector(".nav_nav_nav");
let burger = document.querySelector(".burger");
let navList = document.querySelector(".nav__list");
let page = document.querySelector(".page");

//open nav
navOpenBtn.addEventListener("click", function() {
  navOpenBtn.classList.add("js-hidden");

  nav.classList.add("js-opened");

  burger.classList.add("js-opened");
});

//close nav
navCloseBtn.addEventListener("click", function() {
  navOpenBtn.classList.remove("js-hidden");

  nav.classList.remove("js-opened");

  burger.classList.remove("js-opened");
});

//closing navigation if click outside it


//adding default classes
nav.classList.add("nav--offcanvas-1");
burger.classList.add("burger--offcanvas-1");


//  sous menu

document.getElementById('cours').addEventListener('click', ()=>{
  const Sousmenu = document.getElementById('sous_cours').style.display = 'flex';
});


document.getElementById('entrainement').addEventListener('click', ()=>{
  const Sousmenu = document.getElementById('sous_entrainement').style.display = 'flex';
});
