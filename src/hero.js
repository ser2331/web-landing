

// for refactor up block

// let observer = new IntersectionObserver(function(entries) {
//   if(entries[0].isIntersecting === true) {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY
//     window.addEventListener('scroll', switchCurrentItem(scrollTop, 300))
//   } else {
//     window.removeEventListener('scroll', switchCurrentItem)
//   }
// });
//
// if(document.querySelector(".mt-earn__content")) {
//   observer.observe(document.querySelector(".mt-earn__content"));
// }

// menu header
const headerMenu = document.getElementById("headerMenu")
const buttonMenu = document.getElementById("buttonMenu")
function switchBurgerMenu() {
  headerMenu?.classList.toggle('mt-header__navbar_active');
  buttonMenu?.classList.toggle('mt-button_menu_active');
  document.body.classList.toggle('body_lock');
}
buttonMenu?.addEventListener("click", switchBurgerMenu);
