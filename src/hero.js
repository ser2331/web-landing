const mtHeroTitle = document.getElementById('mtHeroTitle')
const mtHeroArrayTitles = [
  'bill pay', 'B2B payments', 'invoicing'
]

function loopHeader() {
  let loopHeader = setInterval(changeText, 2000);
}
let loopItem = 0;

function changeText() {
  loopItem++;
  if (loopItem == mtHeroArrayTitles.length) {
    loopItem = 0;
  }
  mtHeroTitle.innerHTML = mtHeroArrayTitles[loopItem];
}

const switchCurrentItem = () => {
  if (window.innerWidth > 991) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY
    const mtEarnStickyFirst = document.getElementById('mtEarnStickyFirst')
    const mtEarnStickySecond = document.getElementById('mtEarnStickySecond')
    const mtEarnStickyThird = document.getElementById('mtEarnStickyThird')

    if (scrollTop < 1465) {
      mtEarnStickyFirst.classList.add('mt-earn__head-inner_active')
      mtEarnStickySecond.classList.remove('mt-earn__head-inner_active')
      mtEarnStickyThird.classList.remove('mt-earn__head-inner_active')

    } else if (scrollTop > 1665 && scrollTop < 1964) {
      mtEarnStickySecond.classList.add('mt-earn__head-inner_active')
      mtEarnStickyFirst.classList.remove('mt-earn__head-inner_active')
      mtEarnStickyThird.classList.remove('mt-earn__head-inner_active')
    } else if (scrollTop > 1965 && scrollTop < 2264) {
      mtEarnStickyThird.classList.add('mt-earn__head-inner_active')
      mtEarnStickyFirst.classList.remove('mt-earn__head-inner_active')
      mtEarnStickySecond.classList.remove('mt-earn__head-inner_active')
    }
  }
}
window.addEventListener('scroll', switchCurrentItem)

//
setTimeout(()=>{
  loopHeader()
}, 1000)
//
// setInterval(()=> {
//   for (let i = 0; i <= 3 ; i++) {
//     let interval = setInterval( () => {
//       span.innerText = `${this.state.text[i]}`
//     }, 2000);
//   }
//   mtHeroTitle.innerHTML = mtHeroArrayTitles[2]
// }, 1500)
const headerMenu = document.getElementById("headerMenu")

const buttonMenu = document.getElementById("buttonMenu")
function switchBurgerMenu() {
  headerMenu.classList.toggle('mt-header__navbar_active');
}
buttonMenu.addEventListener("click", switchBurgerMenu);