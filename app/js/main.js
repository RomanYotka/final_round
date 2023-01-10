(function () {
  const headerBurgerBtn = document.querySelector(".header__burger");
  const headerNavigation = document.querySelector(".header__nav");
  const headerButtonCloseNav = document.querySelector(".header__nav-close");

  headerBurgerBtn.addEventListener("click", (e) => {
    headerNavigation.classList.add("active");
  });

  headerButtonCloseNav.addEventListener("click", (e) => {
    headerNavigation.classList.remove("active");
  });
})();

(function () {
  const tabsItem = document.querySelectorAll(".tab__items");
  const tabsBlock = document.querySelectorAll(".tab__block");
  tabsItem.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabsBlock.forEach((content) => {
        content.classList.remove("active");
      });
      tabsItem.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabsItem[index].classList.add("active");
      tabsBlock[index].classList.add("active");
    });
  });
})();

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  speed: 900,
});

const image = document.getElementsByClassName("thumbnail");
new simpleParallax(image, {
  orientation: "right",
});
