const togleBtn = document.querySelector('.nav-toggle');
const menuMobile = document.querySelector('.menu__links');
const menuBtn = document.querySelector('.menu__button');


function navToggle(){
  menuMobile.classList.toggle('menu-mobile');
  menuBtn.classList.toggle('menu-mobile');
  togleBtn.classList.toggle('active');
}



togleBtn.addEventListener('click', function (e) {
  navToggle();
})

