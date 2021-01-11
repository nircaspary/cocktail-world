const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu-items");
const navItems = document.querySelectorAll(".menu-items li");
const body = document.querySelector("body");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search");

const navSlide = () => {
  burger.addEventListener("click", () => {
    //Animate Links
    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinkFade 0.8s ease forwards ${
          index / 3 + 0.3
        }s`;
      }
    });
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Remove overflow
    body.classList.toggle("overflow-hide");
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

//SEARCH BAR
const searchSlide = () => {
  searchBtn.addEventListener("click", () => {
    if (!searchBar.style.animation) {
      searchBar.style.display = "inline";
      searchBar.style.animation = `searchWidthMobile 0.8s ease forwards`;
    } else {
      searchBar.style.animation = "";
      searchBar.style.display = "none";
    }
  });
};

const app = () => {
  navSlide();
  searchSlide();
};
app();
