const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const games_modal = document.querySelector(".fixed-overlay");
const games_clouse = document.querySelector(".modal__clouse");

const body = document.body;

burger.addEventListener("click", function() {
   menu.classList.toggle("show");
   body.classList.toggle("hide");
});

burger.addEventListener('click', function(){
  document.querySelector('.header__burger span').classList.toggle('active');
});

if(window.innerWidth <= 576) {
   let come = document.createElement('li');
   come.innerHTML = '<a href="#" class="nav__link">Войти</a>';
   let signup = document.createElement('li');
   signup.innerHTML = '<a href="#" class="nav__link">Регистрация</a>'
   menu.appendChild(come);
   menu.appendChild(signup);
}

body.addEventListener("click", function(e) {
   if (e.target.classList.contains('btn')) {
      games_modal.classList.add("on");
   }
})

games_clouse.addEventListener("click", function() {
    games_modal.classList.remove("on");
})

