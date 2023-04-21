for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e?.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

const rangeInput = document.querySelector('input[type="range"].slider-progress.revenue-range');
const rangeInputValueShower = document.querySelector('.revenue-range-value');
const rangeInputValueShowerVal = rangeInputValueShower?.querySelector('.value');
rangeInput?.addEventListener('input', (e) => {
  const widthInput = rangeInput?.getBoundingClientRect().width;
  const k = 100;
  const c = widthInput < 50 ? -30 : 30

  rangeInputValueShower?.style.setProperty('--transformRange', ((widthInput - c) / k) * rangeInput.value - 10 + 'px');
  if (rangeInputValueShowerVal) {
    rangeInputValueShowerVal.innerHTML = `${Number(rangeInput.value) * 50}`;
  }
});

{
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth <= 991;
  if(isMobile) {
    rangeInputValueShower?.style.setProperty('--transformRange', 34 + 'px');
  }
}
