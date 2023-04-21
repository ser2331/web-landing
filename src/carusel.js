// let viewport = document.querySelector('#viewport .slide').offsetWidth - 12;
// let slides = document.querySelectorAll('.slide');
// let sliders = [];
// for (let i = 0; i < slides.length; ++i) {
//   sliders[i] = slides[i].querySelector('img');
//   slides[i].remove();
// }
//
// let step = 0;
// let offset = 0;
//
// function drow() {
//   console.log('hi')
//   let slide = document.createElement('div');
//   slide.classList.add('slide');
//   slide.appendChild(sliders[step]);
//   slide.style.left = offset * viewport + 'px';
//   slide.style.visibility = 'hidden';
//   document.querySelector('.slider').appendChild(slide);
//
//   if (step + 1 == slides.length) {
//     step = 0;
//   } else {
//     step++;
//   }
//   offset = 1;
// }
//
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
// drow();
//
// function left() {
//   let slides2 = document.querySelectorAll('.slide');
//   let offset2 = 0;
//   for (let i = 0; i < slides2.length; i++) {
//     slides2[i].style.left = offset2 * viewport - viewport + 'px';
//     offset2++;
//   }
//   slides2[12].style.visibility = 'visible';
//   slides2[0].remove();
//   drow();
// }
//
//
// const runSlider = () => {
//   setInterval(() => {
//     left();
//   }, 1000);
// };
// runSlider();

const sliderWrapper = document?.querySelector('#viewport');

const slide = sliderWrapper?.querySelector('.slider');
const clone = slide?.cloneNode(true)
sliderWrapper?.appendChild(clone);

const transformSlide = () => {
  let transitionSlide = 0;
  let slideNumb = 1;

    setInterval(() => {
    if(transitionSlide === slideNumb * 250) {
      const clone = sliderWrapper?.children[0].cloneNode(true)
      sliderWrapper?.appendChild(clone);

      if(slideNumb >= 4) {
        sliderWrapper?.children[0].remove();
        transitionSlide = 0;
      }
      slideNumb++
      return;
    }
    transitionSlide++
    sliderWrapper?.style.setProperty('--transition', -transitionSlide + 'px');
  }, 20)
}

transformSlide()
