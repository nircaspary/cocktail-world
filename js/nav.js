const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu-items');
const navItems = document.querySelectorAll('.menu-items li');
const body = document.querySelector('body');
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search');
const authContainer = document.querySelector('.auth-container-form');
const authBtn = document.querySelector('.auth');

burger.addEventListener('click', () => {
  //Animate Links
  navItems.forEach((item, index) => {
    if (item.style.animation) item.style.animation = '';
    else item.style.animation = `navLinkFade 0.8s ease forwards ${index / 3 + 0.3}s`;
  });
  //Toggle Nav
  nav.classList.toggle('nav-active');
  //Remove overflow
  body.classList.toggle('overflow-hide');
  //Burger Animation
  burger.classList.toggle('toggle');
});

//OPEN DROPDOWN ITEM
function navInputAnimation(btn, element) {
  btn &&
    btn.addEventListener('click', () => {
      element.style.display = 'flex';
      if (window.innerWidth < 1200) {
        if (!element.style.animation) {
          element.style.display = 'inline';
          element.style.animation = `searchWidthMobile 0.8s ease forwards`;
        } else {
          element.style.animation = '';
          element.style.display = 'none';
        }
      }
    });
}
navInputAnimation(authBtn, authContainer);
navInputAnimation(searchBtn, searchBar);
