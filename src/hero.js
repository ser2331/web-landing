const mtHeroTitle = document.getElementById('mtHeroTitle')
const mtHeroArrayTitles = [
  'invoicing', 'bill pay', 'B2B payments'
]

function loopHeader() {
  let loopHeader = setInterval(changeText, 1500);
}
let loopItem = 0;

function changeText() {
  loopItem++;
  if (loopItem == mtHeroArrayTitles.length) {
    loopItem = 0;
  }
  mtHeroTitle.innerHTML = mtHeroArrayTitles[loopItem];
}


//
// loopHeader()
//
// setInterval(()=> {
//   for (let i = 0; i <= 3 ; i++) {
//     let interval = setInterval( () => {
//       span.innerText = `${this.state.text[i]}`
//     }, 2000);
//   }
//   mtHeroTitle.innerHTML = mtHeroArrayTitles[2]
// }, 1500)
