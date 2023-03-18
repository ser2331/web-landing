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
