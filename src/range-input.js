for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  console.log(e);
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

const rangeInput = document.querySelector('input[type="range"].slider-progress.revenue-range');
const rangeInputValueShower = document.querySelector('.revenue-range-value');
const rangeInputValueShowerVal = rangeInputValueShower.querySelector('.value');
rangeInput.addEventListener('input', (e) => {
  const widthInput = rangeInput.getBoundingClientRect().width;
  rangeInputValueShower.style.setProperty('--transformRange', (widthInput / 250) * rangeInput.value + 'px');
  rangeInputValueShowerVal.innerHTML = rangeInput.value;
});
